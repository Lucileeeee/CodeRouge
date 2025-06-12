const testChat = require("../services/test-chat");
const prisma = require("../config/database");
const downloadAndUploadImage = require("../utils/downloadImage");

class ImageController {
  static async saveImageAsync(prompt, dalleUrl) {
    const filename = `dalle-${Date.now()}.png`;
    console.log("1. Filename:", filename);
    const supabaseUrl = await downloadAndUploadImage(dalleUrl, filename);
    console.log("2. SupabaseUrl reçue:", supabaseUrl, typeof supabaseUrl);
    //debug temporaire
    if (!supabaseUrl || typeof supabaseUrl !== "string") {
      throw new Error("URL Supabase invalide");
    }
    try {
      await prisma.image.create({
        data: {
          prompt,
          url: supabaseUrl,
        },
      });
      console.log("Image sauvegardée avec succès:", {
        prompt,
        url: supabaseUrl,
      });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'image:", error);
    }
  }
  // Générer une nouvelle image
  static async generate(req, res) {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Le prompt est requis" });
      }
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
  }

  // Récupérer toutes les images
  static async getAll(req, res) {
    try {
      const images = await prisma.image.findMany({
        orderBy: {
          dateCreation: "desc",
        },
      });

      res.json({
        success: true,
        data: images,
      });
    } catch (error) {
      console.error("Erreur récupération images:", error);
      res.status(500).json({
        error: "Erreur lors de la récupération des images",
      });
    }
  }

  // Récupérer une image par ID
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const image = await prisma.image.findUnique({
        where: { id: parseInt(id) },
        include: {
          questions: {
            include: {
              quiz: {
                include: {
                  auteur: true,
                },
              },
            },
          },
          resultats: {
            include: {
              quiz: {
                include: {
                  auteur: true,
                },
              },
            },
          },
        },
      });

      if (!image) {
        return res.status(404).json({
          error: "Image non trouvée",
        });
      }

      res.json({
        success: true,
        data: image,
      });
    } catch (error) {
      console.error("Erreur récupération image:", error);
      res.status(500).json({
        error: "Erreur lors de la récupération de l'image",
      });
    }
  }

  // Récupérer les images de l'utilisateur connecté (via ses quiz)
  static async getMyImages(req, res) {
    try {
      const userId = req.user.id;

      // Récupérer les images liées aux quiz de l'utilisateur
      const images = await prisma.image.findMany({
        where: {
          OR: [
            {
              questions: {
                some: {
                  quiz: {
                    auteurId: userId,
                  },
                },
              },
            },
            {
              resultats: {
                some: {
                  quiz: {
                    auteurId: userId,
                  },
                },
              },
            },
          ],
        },
        include: {
          questions: {
            include: {
              quiz: true,
            },
          },
          resultats: {
            include: {
              quiz: true,
            },
          },
        },
        orderBy: {
          dateCreation: "desc",
        },
      });

      res.json({
        success: true,
        data: images,
      });
    } catch (error) {
      console.error("Erreur récupération mes images:", error);
      res.status(500).json({
        error: "Erreur lors de la récupération de vos images",
      });
    }
  }

  // Supprimer une image (avec vérification via quiz)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      // Vérifier que l'utilisateur a le droit de supprimer cette image
      const image = await prisma.image.findUnique({
        where: { id: parseInt(id) },
        include: {
          questions: {
            include: {
              quiz: {
                select: {
                  auteurId: true,
                },
              },
            },
          },
          resultats: {
            include: {
              quiz: {
                select: {
                  auteurId: true,
                },
              },
            },
          },
        },
      });

      if (!image) {
        return res.status(404).json({
          error: "Image non trouvée",
        });
      }

      // Vérifier que l'utilisateur est l'auteur d'au moins un quiz lié à cette image
      const isOwner = [
        ...image.questions.map((q) => q.quiz.auteurId),
        ...image.resultats.map((r) => r.quiz.auteurId),
      ].includes(userId);

      if (!isOwner) {
        return res.status(403).json({
          error: "Vous n'avez pas les droits pour supprimer cette image",
        });
      }

      // Supprimer l'image
      await prisma.image.delete({
        where: { id: parseInt(id) },
      });

      res.json({
        success: true,
        message: "Image supprimée avec succès",
      });
    } catch (error) {
      console.error("Erreur suppression image:", error);
      res.status(500).json({
        error: "Erreur lors de la suppression de l'image",
      });
    }
  }
}

module.exports = ImageController;
