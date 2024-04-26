const db = require("../database/db");

exports.getAllEmps = async () => {
  let [deptArray] = await db.query("select * from Emps");
  return deptArray;
};

exports.getEmpsById = async (dno) => {
  let [deptArray] = await db.query("select * from Emps where empno=" + dno);
  return deptArray[0];
};

exports.deleteEmpById = async (eno) => {
  try {
    const [result] = await db.query("DELETE FROM Emps WHERE empno = ?", [eno]);
  } catch (error) {
    console.log(error);
  }
};

exports.addEmp = async (empObj) => {
  try {
    const [result] = await db.query(
      "INSERT INTO Emps (empno, ename, job, salary, deptno) VALUES (?, ?, ?, ?, ?)",
      [empObj.empno, empObj.ename, empObj.job, empObj.salary, empObj.deptno]
    );
  } catch (error) {
    console.log(error);
  }
};
