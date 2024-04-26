const sequelize = require("sequelize");
const db = require("../database/db");

var deptModel = db.define(
  "dept",
  {
    deptno: { type: sequelize.INTEGER, primaryKey: true },
    dname: { type: sequelize.STRING },
    loc: { type: sequelize.STRING },
  },
  {
    freezeTableName: true,

    timestamps: false,
  }
);
module.exports = deptModel;
