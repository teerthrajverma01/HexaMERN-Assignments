const { body, validationResult } = require("express-validator");

const validateVehicleRegistrationData = (req, res, next) => {
  const validationRules = [
    body("owner_name").trim().notEmpty().withMessage("Owner name is required"),
    body("contact_number")
      .trim()
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact number must be 10 digits"),
    body("vehicle_model")
      .trim()
      .notEmpty()
      .withMessage("Vehicle model is required"),
    body("registration_number")
      .trim()
      .matches(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/)
      .withMessage("Invalid registration number format"),
    body("vehicle_color")
      .trim()
      .notEmpty()
      .withMessage("Vehicle color is required"),
  ];

  // Check validation results
  Promise.all(validationRules.map((validation) => validation.run(req))).then(
    () => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  );
};

module.exports = validateVehicleRegistrationData;
