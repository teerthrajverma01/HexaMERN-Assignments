const db = require("../database/db");
const deptModel = require("../models/dept.model");

exports.getAllDepartments = async () => {
  // let [deptArray] = await db.query("select * from mydb.Dept");
  // return deptArray;
  const result = await deptModel.findAll();
  const dataValuesArray = result.map((instance) => instance.dataValues);

  return dataValuesArray;
};

exports.getDepartmentById = async (dno) => {
  // let [deptArray] = await db.query("select * from Dept where deptno=" + dno);
  // return deptArray[0];
  const department = await deptModel.findOne({
    where: { deptno: dno },
  });
  return department.dataValues;
};

exports.deleteDeptById = async (dno) => {
  try {
    // const [result] = await db.query("DELETE FROM Dept WHERE deptno = ?", [dno]);
    // if (result.affectedRows === 0) {
    //   throw new Error("Department not found");
    // }
    // return "Department deleted successfully";
    const deletedRows = await deptModel.destroy({
      where: { deptno: dno },
    });
    if (deletedRows === 0) {
      throw new Error("Department not found");
    }
    return "Department deleted successfully";
  } catch (error) {
    console.log(error);
  }
};

exports.addDept = async (data) => {
  try {
    // const { deptno, dname, loc } = deptObj;
    // const [result] = await db.query(
    //   "INSERT INTO Dept (deptno, dname, loc) VALUES (?, ?, ?)",
    //   [deptno, dname, loc]
    // );
    // if (result.affectedRows === 0) {
    //   throw new Error("Failed to add department");
    // }
    // return "Department added successfully";

    const newDepartment = await Department.create(deptObj);

    return "Department added successfully";
  } catch (error) {
    console.error("Error adding department:", error);
    return "FAILURE";
  }
};

// Update
exports.updateDept = async (data) => {
  await deptModel.update(data, { where: { deptno: data.deptno } });
  return "Dept details are udpated";
};
