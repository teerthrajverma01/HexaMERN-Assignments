const express = require("express");
var bodyParser = require("body-parser");
const deptRouter = require("./controllers/dept.controller");
const empController = require("./controllers/emp.controller");
const dateTimeUtil = require("./utils/dateTimeUtil");
const logRequest = require("./utils/logutil");

// create express application object
const app = express();

// app.use((req, res, next) => {
//   let d = new Date();
//   console.log("Request arrived to server at : " + dateTimeUtil.getTimeStamp(d));
//   next();
// });

app.use(logRequest);
// Serving static files : images,css, js, media files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(bodyParser.json());

app.set("view engine", "ejs");

// app.use("/", deptRouter);
// app.use("/route_prefix", deptRouter);
app.use("/DeptController", deptRouter);

app.use("/EmpList", empController);

// default request
app.get("/", function (req, res) {
  let resultStr = "<h1 align='center'>Welcome to Express Web Application<h1/>";
  res.send(resultStr);
});

// 404 Issues - NotFound Requests
app.get("*", function (req, res) {
  //render NotFound view
  res.status(404).render("NotFound", null);
});

app.listen(3002, function () {});
console.log("Server Application is started. Url : http://localhost:3002");

module.exports = app; // for testing
