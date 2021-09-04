module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql2',
        host: env('DATABASE_HOST', 'db-mysql-tds-do-user-9345893-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'tds-live'),
        username: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'w4c0yvi6ozyc990h'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
