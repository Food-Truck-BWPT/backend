exports.up = function(knex) {
    return knex.schema
    .createTable('menu_items', tbl => {
        tbl.integer('menu_id').unsigned().notNullable().references('id').inTable('menu');
        tbl.integer('items_id').unsigned().notNullable().references('id').inTable('items');
    
        tbl.primary(['menu_id', 'items_id']);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu_items')
};
