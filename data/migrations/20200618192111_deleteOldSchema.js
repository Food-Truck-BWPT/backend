
exports.up = function(knex) {
    return knex.schema
    
    .createTable('users_trucks', tbl => {
        tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users');
        tbl.integer('trucks_id').unsigned().notNullable().references('id').inTable('trucks');
    
        tbl.primary(['users_id', 'trucks_id']);
    })

    .createTable('trucks_menu', tbl => {
        tbl.integer('menu_id').unsigned().notNullable().references('id').inTable('menu');
        tbl.integer('trucks_id').unsigned().notNullable().references('id').inTable('trucks');
    
        tbl.primary(['menu_id', 'trucks_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('trucks_menu')
    .dropTableIfExists('users_trucks')
};
