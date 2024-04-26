const Emps = require("../models/emps.model");

// Function to get employees by department number
async function getEmpsByDept(deptno) {
  try {
    const employees = await Emps.findAll({
      where: { deptno: deptno },
    });
    return employees;
  } catch (error) {
    throw new Error("Error fetching employees by department: " + error.message);
  }
}

// Function to get all employees
async function getAllEmps() {
  try {
    const employees = await Emps.findAll();
    return employees;
  } catch (error) {
    throw new Error("Error fetching all employees: " + error.message);
  }
}

module.exports = {
  getEmpsByDept,
  getAllEmps,
};
