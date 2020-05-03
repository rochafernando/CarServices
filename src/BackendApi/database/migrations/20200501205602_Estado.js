
exports.up = function(knex) {
    return knex.schema.createTable('LogEstado', (table) => {
        table.increments();
        table.string('Estado',50).notNullable();
        table.string('Sigla',2).notNullable();
        table.unique('Estado');
        table.unique('Sigla');
    } );
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('LogEstado');  
};
