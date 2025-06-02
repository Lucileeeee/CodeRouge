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
    const imgName = `image-${Date.now()}.jpg`;
    const localPath = `/downloads/${imgName}`;
    await downloadImage(imageUrl, imgName);
    return {
      url: imageUrl,
      localPath: localPath,
    };
  } catch (error) {
    console.error("Erreur API Dalle :", error.message);
    throw new Error("from back: Impossible de générer l’image.");
  }
}

module.exports = testChat;
