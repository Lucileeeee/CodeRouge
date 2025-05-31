const { generateImage } = require("../services/dalle");

const creatImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const imageUrl = await generateImage(prompt);
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la génération de l'image" });
  }
};

module.exports = { creatImage };
