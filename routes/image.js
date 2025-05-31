const express = require("express");
const { creatImage } = require("../controllers/imageController");

const router = express.Router();

router.post("/generate", creatImage);

module.exports = router;
