
exports.up = function(knex) {
    return knex.schema.createTable('States', (table) => {
        table.increments();
        table.string('name',50).notNullable();
        table.string('Initials',2).notNullable();
        table.unique('name');
        table.unique('Initials');
    } );
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('States');  
};
