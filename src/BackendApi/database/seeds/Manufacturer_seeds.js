
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Manufactures').del()
    .then(function () {
      // Inserts seed entries
      return knex('Manufactures').insert([
        {name: 'Chevrolet'},
        {name: 'Ford'},
        {name: 'Fiat'},
        {name: 'Volkswagen'},
        {name: 'Honda'},
      ]);
    });
};
