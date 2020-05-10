
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('States').del()
    .then(function () {
      // Inserts seed entries
      return knex('States').insert([
        {name: 'Acre', Initials:'AC'},
        {name: 'Alagoas', Initials:'AL'},
        {name: 'Amapá', Initials:'AP'},
        {name: 'Amazonas', Initials:'AM'},
        {name: 'Bahia', Initials:'BA'},
        {name: 'Ceara', Initials:'CE'},
        {name: 'Distrito Federal', Initials:'DF'},
        {name: 'Espirito Santo', Initials:'ES'},
        {name: 'Goiás', Initials:'GO'},
        {name: 'Maranhão', Initials:'MA'},
        {name: 'Mato Grosso', Initials:'MT'},
        {name: 'Mato Grosso do Sul', Initials:'MS'},
        {name: 'Minas Gerais', Initials:'MG'},
        {name: 'Pará', Initials:'PA'},
        {name: 'Paraíba', Initials:'PB'},
        {name: 'Paraná', Initials:'PR'},
        {name: 'Pernambuco', Initials:'PE'},
        {name: 'Piauí', Initials:'PI'},
        {name: 'Rio de Janeiro', Initials:'RJ'},
        {name: 'Rio Grande do Norte', Initials:'RN'},
        {name: 'Rio Grande do Sul', Initials:'RS'},
        {name: 'Rondônia', Initials:'RO'},
        {name: 'Roraima', Initials:'RR'},
        {name: 'Santa Catarina', Initials:'SC'},
        {name: 'São Paulo', Initials:'SP'},
        {name: 'Sergipe', Initials:'SE'},
        {name: 'Tocantins', Initials:'TO'},
      ]);
    });
};
