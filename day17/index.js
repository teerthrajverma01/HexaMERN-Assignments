const express = require("express");
const app = express();
const validateVehicleRegistrationData = require("./validator.middleware");

app.use(express.urlencoded({ extended: false, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

// Route to register a new vehicle
app.post("/register", validateVehicleRegistrationData, (req, res) => {
  // Process vehicle registration data
  console.log("registration success");

  res.status(200).json({ message: "Vehicle registered successfully" });
});

app.listen(3002, function () {});
