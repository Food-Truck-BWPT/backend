exports.up = function (knex) {
  knex.schema.table("users_trucks", (tbl) => {
    tbl.integer("id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users_trucks");
};
