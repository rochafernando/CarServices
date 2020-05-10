
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Address').del()
    .then(function () {
      // Inserts seed entries
      return knex('Address').insert([
        {name: 'Rua Santa Cruz do Escalvado',CEP:'02871000',TypesId:'129',CitiesId:'2'},
      ]);
    });
};
