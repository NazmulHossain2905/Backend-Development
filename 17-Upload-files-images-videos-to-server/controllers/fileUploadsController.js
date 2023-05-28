const path = require("path");

const getFileUploadForm = (req, res) => {
  //   console.log({ __dirname, path: path.resolve() });
  res.status(200).sendFile(path.resolve("views/index.html"));
};

const singleFileUpload = (req, res) => {
  res.status(201).json({
    message: "File upload successfully",
  });
};

module.exports = { singleFileUpload, getFileUploadForm };
