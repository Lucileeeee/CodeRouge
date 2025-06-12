// middleware/auth.js
const cors = require("cors");
const prisma = require("../config/database");

// Configuration CORS stricte
const corsOptions = {
  origin: ["http://localhost:5173"], // Seul le front est autorisé
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware de vérification d'origine
const checkOrigin = (req, res, next) => {
  const origin = req.get("origin") || req.get("referer");
  // Vérifier que la requête vient bien de votre front
  if (!origin || !origin.includes("localhost:5173")) {
    return res.status(403).json({
      error: "Accès non autorisé - origine invalide",
      receivedOrigin: origin,
    });
  }
  console.log(`Requête autorisée depuis: ${origin}`);
  next();
};

// Export des middlewares
module.exports = {
  corsOptions,
  checkOrigin,
};

/* 
Version avec Token
const jwt = require("jsonwebtoken");
const prisma = require("../config/database");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Token d'accès requis" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token invalide" });
  }
};

module.exports = { authenticateToken }; */
