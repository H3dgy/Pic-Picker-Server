require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DEV,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    logging: false
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_TEST,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    logging: false
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_PROD,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    logging: false
  }
};
