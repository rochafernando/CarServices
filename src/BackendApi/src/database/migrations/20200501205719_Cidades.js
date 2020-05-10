
exports.up = function(knex) {
    return knex.schema.createTable('Cities', (table) => {
        table.increments();
        table.string('name',50).notNullable();
        table.integer('Code',2).notNullable();
        table.integer('StatesId').notNullable().references('States.id');
        table.unique('name');
        table.unique('Code');
    } );  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cities');  
};
