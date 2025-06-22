const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");
const {
  createOneImage,
} = require("../prisma/generated/schemas-js/createOneImage.schema");
const validateImage = require("../middleware/image");

router.post("/generate", validateImage, ImageController.generate);

module.exports = router;
