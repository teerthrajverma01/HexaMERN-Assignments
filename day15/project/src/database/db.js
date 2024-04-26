require("dotenv").config();

var Sequelize = require("sequelize");

var db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_ID,
  process.env.DB_USER_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);
module.exports = db;
