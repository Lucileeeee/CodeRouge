const OpenAI = require("openai");
const downloadImage = require("../utils/downloadImage");

const openai = new OpenAI({
  apiKey: process.env.OpenAiKey,
});

async function testChat(prompt) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    const imageUrl = response.data[0].url;
    //téléchargement
    const filename = `image-${Date.now()}.jpg`;
    const localPath = `/downloads/${filename}`;
    await downloadImage(imageUrl, filename);
    return {
      url: imageUrl,
      localPath: localPath,
    };
  } catch (error) {
    console.error("Erreur DALL·E :", error.message);
    throw new Error("Impossible de générer l’image.");
  }
}

module.exports = testChat;
