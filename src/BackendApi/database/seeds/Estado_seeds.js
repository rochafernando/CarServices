
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('LogEstado').del()
    .then(function () {
      // Inserts seed entries
      return knex('LogEstado').insert([
        {Estado: 'Acre', Sigla:'AC'},
        {Estado: 'Alagoas', Sigla:'AL'},
        {Estado: 'Amapá', Sigla:'AP'},
        {Estado: 'Amazonas', Sigla:'AM'},
        {Estado: 'Bahia', Sigla:'BA'},
        {Estado: 'Ceara', Sigla:'CE'},
        {Estado: 'Distrito Federal', Sigla:'DF'},
        {Estado: 'Espirito Santo', Sigla:'ES'},
        {Estado: 'Goiás', Sigla:'GO'},
        {Estado: 'Maranhão', Sigla:'MA'},
        {Estado: 'Mato Grosso', Sigla:'MT'},
        {Estado: 'Mato Grosso do Sul', Sigla:'MS'},
        {Estado: 'Minas Gerais', Sigla:'MG'},
        {Estado: 'Pará', Sigla:'PA'},
        {Estado: 'Paraíba', Sigla:'PB'},
        {Estado: 'Paraná', Sigla:'PR'},
        {Estado: 'Pernambuco', Sigla:'PE'},
        {Estado: 'Piauí', Sigla:'PI'},
        {Estado: 'Rio de Janeiro', Sigla:'RJ'},
        {Estado: 'Rio Grande do Norte', Sigla:'RN'},
        {Estado: 'Rio Grande do Sul', Sigla:'RS'},
        {Estado: 'Rondônia', Sigla:'RO'},
        {Estado: 'Roraima', Sigla:'RR'},
        {Estado: 'Santa Catarina', Sigla:'SC'},
        {Estado: 'São Paulo', Sigla:'SP'},
        {Estado: 'Sergipe', Sigla:'SE'},
        {Estado: 'Tocantins', Sigla:'TO'},
      ]);
    });
};
