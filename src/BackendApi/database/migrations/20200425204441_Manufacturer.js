
exports.up = function(knex) {
    return knex.schema.createTable('Manufactures', (table) => {
        table.increments();
        table.string('name',50).notNullable();
        table.unique('name');
    } );
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Manufactures');  
};
