module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "drinksForSequelize",
    host: "127.0.0.1",
    dialect: "postgres"
    
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_HOSTNAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"
  }
};
