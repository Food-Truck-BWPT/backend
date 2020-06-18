exports.up = function(knex) {
  return knex.schema
    // users
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').notNullable().unique();
      tbl.string('email').notNullable().unique();
      tbl.string('password').notNullable();
      tbl.boolean('isVendor');
  })

    // nextLocation
.createTable('nextLocation', tbl => {
    tbl.increments();
    tbl.string('location');
    tbl.string('arrivalTime');
    tbl.string('departureTime');
})

    // currentLocation
.createTable('currentLocation', tbl => {
    tbl.increments();
    tbl.string('address');
    tbl.string('lat');
    tbl.string('long');
    tbl.string('departureTime');
    tbl.integer('nextLocation_id').unsigned().notNullable().references('id').inTable('nextLocation');
})

    // menu
.createTable('menu', tbl => {
    tbl.increments();
}) 

    // menuItems
.createTable('menuItems', tbl => {
    tbl.increments();
    tbl.string('itemName');
    tbl.string('itemDescription');
    tbl.string('itemPhotos');
    tbl.string('itemPrice');
    tbl.string('customerRatings');
    tbl.string('customerRatingAvg');
    tbl.integer('menu_id').unsigned().notNullable().references('id').inTable('menu');
})

    // trucks
  .createTable('trucks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('imageOfTruck');
      tbl.string('cuisineType');
      tbl.string('customerRatings');
      tbl.string('customerRatingAvg');
      tbl.integer('menu_id').unsigned().notNullable().references('id').inTable('menu');
      tbl.integer('currentLocation_id').unsigned().notNullable().references('id').inTable('currentLocation');
      tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users');
  })

// users_trucks
.createTable('users_trucks', tbl => {
    tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users');
    tbl.integer('trucks_id').unsigned().notNullable().references('id').inTable('trucks');

    tbl.primary(['users_id', 'trucks_id']);
})

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users_trucks')
  .dropTableIfExists('trucks')
  .dropTableIfExists('menuItems')
  .dropTableIfExists('menu')
  .dropTableIfExists('currentLocation')
  .dropTableIfExists('nextLocation')
  .dropTableIfExists('users')
};
