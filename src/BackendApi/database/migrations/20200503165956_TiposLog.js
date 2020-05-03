
exports.up = function(knex) {
    return knex.schema.createTable('TiposLog', (table) => {
        table.increments();
        table.string('Codigo',3).notNullable();
        table.string('Descrição',50).notNullable();
        table.unique('Codigo');
        table.unique('Descrição');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('TiposLog');  
};
