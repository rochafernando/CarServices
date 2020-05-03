
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TiposLog').del()
    .then(function () {
      // Inserts seed entries
      return knex('TiposLog').insert([
        { Codigo: 'A',Descrição:'Área'},
        { Codigo: 'AC',Descrição:'Acesso'},
        { Codigo: 'ACA',Descrição:'Acampamento'},
      ]);
    });
};
