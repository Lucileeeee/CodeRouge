// services/dalle.js
const axios = require("axios");
/* todo clef Api et token for real */
const generateImage = async (prompt) => {
  /*  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OpenAiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data[0].url;
  } catch (error) {
    console.error(
      "Erreur lors de la génération d'image DALL·E :",
      error.response?.data || error.message
    );
    throw error;
  } */
};

module.exports = { generateImage };
