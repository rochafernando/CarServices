
exports.up = function(knex) {
    return knex.schema.createTable('Address', (table) => {
        table.increments();
        table.string('name',50).notNullable();
        table.string('CEP',9).notNullable();
        table.integer('TypesId').notNullable().references('TypespPublicPlace.id');
        table.integer('CitiesId').notNullable().references('Cities.id');
        table.unique('name');
        table.unique('CEP');
    } );  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Address');  
};
