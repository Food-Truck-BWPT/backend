exports.up = function (knex) {
  return (
    knex.schema

      // menu
      .createTable("menu", (tbl) => {
        tbl.increments();
        tbl.string("name").notNullable();
      })

      // items
      .createTable("items", (tbl) => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("itemName");
        tbl.string("itemDescription");
        tbl.string("itemPhotos");
        tbl.string("itemPrice");
        tbl.string("customerRatings");
        tbl.string("customerRatingsAvg");
      })

      // trucks_menu
      .createTable("trucks_menu", (tbl) => {
        tbl
          .integer("trucks_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("trucks");
        tbl
          .integer("menu_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("menu");

        tbl.primary(["trucks_id", "menu_id"]);
      })

      // menu_items
      .createTable("menu_items", (tbl) => {
        tbl
          .integer("items_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("items");
        tbl
          .integer("menu_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("menu");

        tbl.primary(["items_id", "menu_id"]);
      })
  );
};

exports.down = function (knex) {};
