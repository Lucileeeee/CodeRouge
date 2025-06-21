const prisma = require("../config/database");

// Middleware pour valider les données de génération d'image
const validateImageGeneration = (req, res, next) => {
  const { prompt } = req.body;

  // Vérification du prompt
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({
      error: "Le prompt est requis et doit être une chaîne de caractères",
    });
  }

  // Vérification de la longueur du prompt
  if (prompt.trim().length < 3) {
    return res.status(400).json({
      error: "Le prompt doit contenir au moins 3 caractères",
    });
  }

  if (prompt.length > 1000) {
    return res.status(400).json({
      error: "Le prompt ne peut pas dépasser 1000 caractères",
    });
  }

  // Nettoyer le prompt
  req.body.prompt = prompt.trim();

  next();
};

// Middleware pour vérifier l'ownership d'une image (via quiz)
const checkImageOwnership = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

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
        error: "Vous n'avez pas les droits pour accéder à cette image",
      });
    }

    req.image = image;
    next();
  } catch (error) {
    console.error("Erreur vérification propriété image:", error);
    res.status(500).json({
      error: "Erreur lors de la vérification des droits",
    });
  }
};

// Middleware pour limiter le nombre de générations par utilisateur (optionnel)
const rateLimitGeneration = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    // Compter les images générées dans la dernière heure liées aux quiz de l'utilisateur
    const recentGenerations = await prisma.image.count({
      where: {
        dateCreation: {
          gte: oneHourAgo,
        },
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
    });

    // Limite à 10 générations par heure (ajustez selon vos besoins)
    if (recentGenerations >= 10) {
      return res.status(429).json({
        error:
          "Limite de génération atteinte. Veuillez attendre avant de générer une nouvelle image.",
      });
    }

    next();
  } catch (error) {
    console.error("Erreur rate limiting:", error);
    next(); // On continue même en cas d'erreur pour ne pas bloquer l'utilisateur
  }
};

// Middleware pour valider les paramètres de requête
const validateImageParams = (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      error: "ID d'image invalide",
    });
  }

  next();
};

module.exports = {
  validateImageGeneration,
  checkImageOwnership,
  rateLimitGeneration,
  validateImageParams,
};
