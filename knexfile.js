// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/foodtruckDB.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds'},
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
  },

  testing: {
    client: 'sqlite3',
    connection: { filename: './data/test/test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/test/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/test/seeds' },
  },
};