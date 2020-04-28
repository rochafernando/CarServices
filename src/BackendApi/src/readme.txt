http://knexjs.org/
para criar as migrations no knex criarmos o executamos o seguinte comando

npx knex migrate:make nome_do_migration   <-- Esse cria o arquivo migration para configuramos
npx knex migrate:latest <-- faz os ultimos migrates criado
npx knex migrate:rollback <--


Para criar as seeds executamos o seguinte comando
knex seed:make seed_name