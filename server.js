const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));

//routes
const routes = require("./routes");
const imageRoutes = require("./routes/image");
const testChatRoute = require("./routes/testChatRoute");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static("public"));
app.use("/downloads", express.static("downloads"));

//routes api
app.use("/api", routes);
app.use("/api/image", imageRoutes);
app.use("/api/test-chat", testChatRoute);

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
