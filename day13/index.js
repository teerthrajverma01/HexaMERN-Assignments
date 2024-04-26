const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// ************************************************************

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

let myobj = {
  fruit: ["apple", "mango", "orange"],
};
console.log("hii");
app.get("/api/gettest", (req, res) => {
  return res
    .status(200)
    .json({ status: 200, data: myobj, message: "get success" });
});
app.post("/api/posttest", (req, res) => {
  const { fruit } = req.body;
  if (fruit) {
    myobj.fruit = [...myobj.fruit, fruit];
  }
  return res
    .status(200)
    .json({ status: 200, data: myobj, message: "post success" });
});
app.delete("/api/deletetest", (req, res) => {
  const { fruit } = req.body;
  let newmyobj = myobj.fruit.filter((indifruit) => indifruit != fruit);
  return res
    .status(200)
    .json({ status: 200, data: newmyobj, message: "delete success" });
});
app.patch("/api/patchtest", (req, res) => {
  const { oldValue, newValue } = req.body;
  console.log(oldValue, newValue);
  const newArray = myobj.fruit.map((item) => {
    if (item === oldValue) {
      return newValue;
    } else {
      return item;
    }
  });

  return res
    .status(200)
    .json({ status: 200, newobj: { newArray }, message: "patch success" });
});

// ****************************************************************
const backendPort = process.env.PORT || 3000;
app.listen(backendPort, () => {
  console.log(`Server is running at http://localhost:${backendPort}`);
});
