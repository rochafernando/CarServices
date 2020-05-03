
exports.up = function(knex) {
    return knex.schema.createTable('LogCidades', (table) => {
        table.increments();
        table.string('nameCidade',50).notNullable();
        table.integer('CodigoIBGE',2).notNullable();
        table.integer('EstadoID').notNullable().references('LogEstado.id');
        table.unique('nameCidade');
        table.unique('CodigoIBGE');
    } );  
};

exports.down = function(knex) {
    return knex.schema.dropTable('LogCidades');  
};
