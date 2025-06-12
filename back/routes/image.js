const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");

// Routes simples, pas d’auth, pas de middlewares
router.get("/", ImageController.getAll);
router.post("/generate", ImageController.generate);
router.get("/:id", ImageController.getById);
router.delete("/:id", ImageController.delete);

module.exports = router;

/* const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");
const { authenticateToken } = require("../middleware/auth");
const {
  validateImageGeneration,
  checkImageOwnership,
  rateLimitGeneration,
  validateImageParams,
} = require("../middleware/image");

// Routes publiques
router.get("/", ImageController.getAll);

// Routes protégées - ROUTES SPÉCIFIQUES EN PREMIER
router.get("/user/my-images", authenticateToken, ImageController.getMyImages);
router.post(
  "/generate",
  //authenticateToken,
  validateImageGeneration,
  // rateLimitGeneration, //  limite le nombre de générations
  ImageController.generate
);
router.delete(
  "/:id",
  authenticateToken,
  validateImageParams,
  checkImageOwnership,
  ImageController.delete
);

// Routes avec paramètres - EN DERNIER
router.get("/:id", validateImageParams, ImageController.getById);

module.exports = router; */
