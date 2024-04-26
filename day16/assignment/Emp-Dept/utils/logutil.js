const fs = require("fs");
const path = require("path");

// Middleware function to log request details to userLogs.txt file
function logRequest(req, res, next) {
  const logData = `${new Date().toISOString()} - Requested URL: ${req.url}\n`;

  // Append data to userLogs.txt file
  fs.appendFile(path.join(__dirname, "userLogs.txt"), logData, (err) => {
    if (err) {
      console.error("Error writing to userLogs.txt:", err);
    }
  });

  next(); // Call next middleware
}

module.exports = logRequest;
