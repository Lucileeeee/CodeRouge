const express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);
const imageRoutes = require("./routes/image");
app.use("/api/image", imageRoutes);

const testChatRoute = require("./routes/testChatRoute");
app.use("/api/test-chat", testChatRoute);
app.use(express.static("public"));

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
});

module.exports = app;
