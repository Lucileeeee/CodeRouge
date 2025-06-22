const testChat = require("../services/test-chat");
const { supabaseAdmin } = require("../config/supabase");
const downloadAndUploadImage = require("../utils/downloadImage");
const {
  ImageCreateOneSchema,
} = require("../prisma/generated/schemas-js/createOneImage.schema");

class ImageController {
  static async saveImageAsync(prompt, dalleUrl) {
    const filename = `dalle-${Date.now()}.png`;
    console.log("Filename:", filename);
    const supabaseUrl = await downloadAndUploadImage(dalleUrl, filename);
    console.log("SupabaseUrl, prompt:", supabaseUrl, prompt);
    /* try {
      await supabaseAdmin
        .from("Image")
        .insert([{ prompt: prompt, url: supabaseUrl }]);
      console.log("Image sauvegardée avec succès:", {
        prompt: prompt,
        url: supabaseUrl,
      });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'image:", error);
      throw error;
    } */
    const { data, error } = await supabaseAdmin
      .from("Image")
      .insert([{ prompt: prompt, url: supabaseUrl }]);
    console.log("Résultat insert:", { data, error });
    if (error) {
      console.error("Erreur insert:", error);
      throw error;
    }
    console.log("Image sauvegardée avec succès:", data);
  }
  // Générer une image
  static async generate(req, res) {
    try {
      const { prompt } = req.body;
      const imageData = await testChat(prompt);
      // Validation Zod complète
      try {
        ImageCreateOneSchema.parse({
          data: { prompt, url: imageData.dalleUrl },
        });
      } catch (err) {
        console.error("Erreur validation Zod complète :", err);
        return res
          .status(400)
          .json({ error: "Image invalide : " + err.message });
      }

      res.json({
        success: true,
        data: { dalleUrl: imageData.dalleUrl },
      });

      ImageController.saveImageAsync(prompt, imageData.dalleUrl).catch((err) =>
        console.error("Erreur sauvegarde image :", err)
      );
    } catch (error) {
      console.error("Erreur dans generate :", error);
      res.status(500).json({
        error: error.message || "Erreur lors de la génération de l'image",
      });
    }
  }

  /* static async generate(req, res) {
    try {
      const { prompt } = req.body;

      // On appelle le service
      const imageData = await testChat(prompt);
      console.log("retour de testChat :", imageData);

      //on renvoie l'url temporaire dans le front
      res.json({
        success: true,
        data: {
          dalleUrl: imageData.dalleUrl,
        },
      });
      //validation zod
      try {
        ImageCreateOneSchema.parse({
          data: {
            prompt,
            url: imageData.dalleUrl,
          },
        });
      } catch (err) {
        console.error("Erreur Zod lors de l'insertion :", err);
        return res
          .status(400)
          .json({ error: "Image invalide : " + err.message });
      }
      //enregistrement en bdd
      ImageController.saveImageAsync(prompt, imageData.dalleUrl).catch((err) =>
        console.error("Erreur sauvegarde complète:", err)
      );
    } catch (error) {
      console.error("Erreur génération image:", error);
      res.status(500).json({
        error: error.message || "Erreur lors de la génération de l'image",
      });
    }
  } */
}

module.exports = ImageController;
