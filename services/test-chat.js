const OpenAI = require("openai");
const downloadImage = require("../utils/downloadImage");
const sanitize = require("../utils/sanitize");

const openai = new OpenAI({
  apiKey: process.env.OpenAiKey,
});

//? da du site:
const style =
  ", dans un style animation 3d, avec couleurs dominantes orange, jaune, rouge";

async function testChat(prompt) {
  const cleanPrompt = sanitize(prompt);
  try {
    const finalPrompt = `${cleanPrompt.trim().replace(/\.$/, "")}, ${style}`;
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: finalPrompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    const imageUrl = response.data[0].url;
    //téléchargement local
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
