/* const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const { authenticateToken } = require("../middleware/auth");

// Routes publiques
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Routes protégées
router.get("/profile", authenticateToken, AuthController.getProfile);

module.exports = router;
 */
