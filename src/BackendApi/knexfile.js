// Update with your config settings.


module.exports = {

  development: {
    client: 'mssql',
  connection: {
    server : 'localhost',
    user : 'sa',
    password : 'Fermath$',
    database : 'CarServices',
    options: {
      port: 1433
    }
  },
    migrations : {
      directory : './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  test: {
    client: 'mssql',
    connection: {
      server : 'localhost',
      user : 'sa',
      password : 'Fermath$',
      database : 'CarServices',
      options: {
        port: 1433
      }
    },
    migrations : {
      directory : './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },



  developmentLite: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/carservices.sqlite'
    },
    migrations : {
      directory : './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault : true
  },


  testLite: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/carservicesTest.sqlite'
    },
    migrations : {
      directory : './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault : true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
