const { Op } = require("sequelize");
const deptModel = require('..//models/dept.model');


// Read All
exports.getAllDepartments = async () => {
    let deptArray = await deptModel.findAll();
    return deptArray;
};

 

// Read Single
exports.getDepartmentById = async (dno) => {
    let deptObj = await deptModel.findByPk(dno);
    return deptObj;
};

 
// Create
exports.addDept = async (deptObj) => {
    await deptModel.create(deptObj);
    return "Dept details are inserted";
};

 
// Update
exports.updateDept = async (deptObj) => {
    await deptModel.update(deptObj, { where: { deptno: deptObj.deptno }  });
    return "Dept details are udpated";
};

// Delete 
exports.deleteDeptById = async (dno) => {
    await deptModel.destroy({ where: { deptno: dno }  });
    return "Dept details are deleted";
};

 
