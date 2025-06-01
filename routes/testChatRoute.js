const express = require("express");
const router = express.Router();
const testChat = require("../services/test-chat");

router.post("/", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await testChat(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'appel à OpenAI" });
  }
});

module.exports = router;
