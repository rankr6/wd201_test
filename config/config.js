/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },

  test: {
    username: "postgres",
    password: "rank",
    database: "todo-test",
    dialect: "postgres",
  },
  
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    logging: false,
  },
};