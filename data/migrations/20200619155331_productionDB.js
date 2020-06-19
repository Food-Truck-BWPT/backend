exports.up = function (knex) {
  return (
    knex.schema

      // users
      .createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("username").notNullable().unique();
        tbl.string("email").notNullable().unique();
        tbl.string("password").notNullable();
        tbl.boolean("isVendor");
      })

      // trucks
      .createTable("trucks", (tbl) => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("imageOfTruck");
        tbl.string("cuisineType");
        tbl.string("customerRatings");
        tbl.string("customerRatingAvg");
        tbl.string("address");
        tbl.string("lat");
        tbl.string("long");
        tbl.string("departureTime");
        tbl.string("nex_address");
        tbl.string("next_lat");
        tbl.string("next_long");
        tbl.string("next_arrivalTime");
        tbl.string("next_departureTime");
      })

      // users_trucks
      .createTable("users_trucks", (tbl) => {
        tbl
          .integer("users_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users");
        tbl
          .integer("trucks_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("trucks");

        tbl.primary(["users_id", "trucks_id"]);
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users_trucks")
    .dropTableIfExists("trucks")
    .dropTableIfExists("users");
};
