
exports.up = function(knex) {
    return knex.schema.createTable('TypespPublicPlace', (table) => {
        table.increments();
        table.string('Code',3).notNullable();
        table.string('Descripition',50).notNullable();
        table.unique('Code');
        table.unique('Descripition');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('TypespPublicPlace');  
};
