
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('Cities').del()
      .then(function () {
        // Inserts seed entries
        return knex('Cities').insert([
          {name: 'Acre',Code:'12',StatesId:'1'},
          {name: 'São Paulo',Code:'35',StatesId:'25'},
          {name: 'Distrito Federal',Code:'53',StatesId:'7'}
        ]);
      });
};
