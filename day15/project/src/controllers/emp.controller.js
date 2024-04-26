// const express = require("express");
// const router = express.Router();


// router.get("/emps", function(req,res)
// {
//     res.send("This is get request, returns all emps");
// });
 
// //  get request  -    /Detps/10
// router.get("/emps/:id", function(req,res)
// {
//     res.send("This is get request, returns emps for given employee number");
// });


// //  post request  -    /Detps
// router.post("/emps", function(req,res)
// {
//     res.send("This is post request, to create new employee details");
// });

// //  put request  -    /Depts/10
// router.put("/emps/:id", function(req,res)
// {
//     res.send("This is put request, to update employee details");
// });


// //  delete request  -    /Detps/10
// router.delete("/emps/:id", function(req,res)
// {
//     res.send("This is delete request, to delete selected employee");
// });



// module.exports = router;

//----------------------------------------------------------------------------------------------------------------------------------------

//Day 15

const express = require("express");
const router = express.Router();
const empService = require('../services/emp.service');


router.get("/Emps", async function(req,res)
{    
    let dataObj = {};   
    dataObj.empsArray = await empService.getAllEmployees();
    res.render("empList", dataObj);
});
 
//  get request  -    /Detps/10
router.get("/emps/:id", function(req,res)
{
    res.send("This is get request, returns emps for given employee number");
});


//  post request  -    /Detps
router.post("/emps", function(req,res)
{
    res.send("This is post request, to create new employee details");
});

//  put request  -    /Depts/10
router.put("/emps/:id", function(req,res)
{
    res.send("This is put request, to update employee details");
});


//  delete request  -    /Detps/10
router.delete("/emps/:id", function(req,res)
{
    res.send("This is delete request, to delete selected employee");
});



module.exports = router;

