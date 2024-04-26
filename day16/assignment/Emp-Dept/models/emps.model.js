const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Emps = db.define(
  "Emps",
  {
    empno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ename: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deptno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Dept",
        key: "deptno",
      },
    },
  },
  {
    tableName: "Emps",
    timestamps: false,
  }
);

module.exports = Emps;
