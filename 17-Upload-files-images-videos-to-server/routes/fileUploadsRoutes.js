const router = require("express").Router();

const {
  singleFileUpload,
  getFileUploadForm,
} = require("../controllers/fileUploadsController");
const multerFileUploads = require("../utils/multerFileUploads");

router.get("/", getFileUploadForm);
router.post("/", multerFileUploads.single("image"), singleFileUpload);

module.exports = router;
