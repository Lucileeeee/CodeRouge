const express = require("express");
const router = express.Router();
const testChat = require("../services/test-chat");

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await testChat(prompt);
    // Ici on renvoie bien l'objet complet avec url ET localPath
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message || "Erreur serveur" });
  }
});

module.exports = router;
