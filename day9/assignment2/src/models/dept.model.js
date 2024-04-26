const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/db");

var deptModel = db.define(
  "Dept",
  {
    deptno: { type: DataTypes.INTEGER, primaryKey: true },
    dname: { type: DataTypes.STRING },
    loc: { type: DataTypes.STRING },
  },
  {
    // freeze name table not using *s on name
    freezeTableName: true,
    // dont use createdAt/update
    timestamps: false,
  }
);
module.exports = deptModel;
