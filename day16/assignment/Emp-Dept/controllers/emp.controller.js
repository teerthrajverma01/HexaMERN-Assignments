const express = require("express");
const router = express.Router();
const { getEmpsByDept, getAllEmps } = require("../services/emps.service");

// Route handler for /EmpList
router.get("/", async (req, res) => {
  try {
    let employees;
    const { deptno } = req.query;

    if (deptno) {
      employees = await getEmpsByDept(deptno);
    } else {
      employees = await getAllEmps();
    }

    res.json(employees);
  } catch (error) {
    console.error("Error fetching employee list:", error);
    res.status(500).send("Error fetching employee list");
  }
});

module.exports = router;
