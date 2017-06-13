// Set NODE_ENV to development if not set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  port: Number(process.env.PORT || 8080),
  host: process.env.HOST || 'localhost',
  databaseUrl: process.env.DATABASE_URL,
};

module.exports = config;
