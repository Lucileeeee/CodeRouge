const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");
const { authenticateToken } = require("../middleware/auth");

// Routes publiques
router.get("/", PostController.getAll);

// Routes protégées - ROUTES SPÉCIFIQUES EN PREMIER
router.get("/user/my-posts", authenticateToken, PostController.getMyPosts);
router.post("/", authenticateToken, PostController.create);
router.put("/:id", authenticateToken, PostController.update);
router.delete("/:id", authenticateToken, PostController.delete);

// Routes avec paramètres - EN DERNIER
router.get("/:id", PostController.getById);

module.exports = router;
