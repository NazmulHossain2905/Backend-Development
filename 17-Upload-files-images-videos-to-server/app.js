const express = require("express");
const cors = require("cors");
const app = express();

const fileUploadsRoute = require("./routes/fileUploadsRoutes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/file-uploads", fileUploadsRoute);

// Handle route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 Route not found",
  });
});

module.exports = app;
