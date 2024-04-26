const {
  getAllDepartments,
  getDepartmentById,
  deleteDeptById,
  addDept,
} = require("./src/services/dept.service");

const {
  getAllEmps,
  deleteEmpById,
  addEmp,
  getEmpsById,
} = require("./src/services/emp.service");

const getAllDepartmentsFun = async () => {
  let results = await getAllDepartments();

  console.log(results);
  for (let item of results) {
    console.log(item.dname, item.loc);
  }
};

const getDepartmentByIdFun = async (id) => {
  let deptObj = await getDepartmentById(id);
  console.log(deptObj);
};

const getAllEmpsFun = async () => {
  const result = await getAllEmps();
  console.log(result);
};

const addEmpFun = async () => {
  const empObj = {
    empno: 123,
    ename: "John Doe",
    job: "Software Engineer",
    salary: 50000,
    deptno: 10,
  };
  try {
    await addEmp(empObj);
    console.log("Employee added successfully!");
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};
const updateDeptFun = async () => {
  data = { deptno: 30, dname: "Finance", loc: "Mumbai" };

  status = await deptService.updateDept(data);
  console.log(status);
};

// getAllDepartmentsFun();
// getDepartmentByIdFun(10);
// getAllEmpsFun();
// addEmpFun();
// updateDeptFun()
