const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { corsOptions, checkOrigin } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//static files
app.use(express.static("public"));

//routes
const routes = require("./routes");
const imageRoutes = require("./routes/image");

//routes api sans protection
app.use("/api", routes);

//avec protection
app.use("/api/image", checkOrigin, imageRoutes);

// Middleware de gestion d'erreur 404
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Middleware de gestion d'erreur globale
app.use((error, req, res, next) => {
  console.error("Erreur globale:", error);
  res.status(500).json({ error: "Erreur interne du serveur" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log(`Documentation API disponible sur http://localhost:${PORT}/api`);
  console.log(`Protection activée pour /api/image`);
});

module.exports = app;
