
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('LogCidades').del()
      .then(function () {
        // Inserts seed entries
        return knex('LogCidades').insert([
          {nameCidade: 'Acre',CodigoIBGE:'12',EstadoID:'1'},
          {nameCidade: 'São Paulo',CodigoIBGE:'35',EstadoID:'25'},
          {nameCidade: 'Distrito Federal',CodigoIBGE:'53',EstadoID:'7'}
        ]);
      });
};
