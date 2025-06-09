const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../config/database");

class AuthController {
  static async register(req, res) {
    try {
      const { email, motDePasse, nom, prenom } = req.body;

      // Validation des données
      if (!email || !motDePasse || !nom || !prenom) {
        return res.status(400).json({
          error: "Tous les champs sont requis (email, motDePasse, nom, prenom)",
        });
      }

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await prisma.utilisateur.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: "Cet email est déjà utilisé" });
      }

      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(motDePasse, 10);

      // Créer l'utilisateur
      const user = await prisma.utilisateur.create({
        data: {
          email,
          motDePasse: hashedPassword,
          nom,
          prenom,
        },
      });

      // Générer le token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      // Retourner les infos sans le mot de passe
      const { motDePasse: _, ...userWithoutPassword } = user;

      res.status(201).json({
        message: "Utilisateur créé avec succès",
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async login(req, res) {
    try {
      const { email, motDePasse } = req.body;

      // Validation des données
      if (!email || !motDePasse) {
        return res.status(400).json({
          error: "Email et mot de passe sont requis",
        });
      }

      // Trouver l'utilisateur
      const user = await prisma.utilisateur.findUnique({
        where: { email },
        include: {
          roles: true, // Inclure les rôles si nécessaire
        },
      });

      if (!user) {
        return res
          .status(401)
          .json({ error: "Email ou mot de passe incorrect" });
      }

      // Vérifier le mot de passe
      const isValidPassword = await bcrypt.compare(motDePasse, user.motDePasse);

      if (!isValidPassword) {
        return res
          .status(401)
          .json({ error: "Email ou mot de passe incorrect" });
      }

      // Générer le token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      // Retourner les infos sans le mot de passe
      const { motDePasse: _, ...userWithoutPassword } = user;

      res.json({
        message: "Connexion réussie",
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getProfile(req, res) {
    try {
      const user = await prisma.utilisateur.findUnique({
        where: { id: req.user.id },
        include: {
          roles: true,
          quizzes: {
            select: {
              id: true,
              titre: true,
              dateCreation: true,
              disponible: true,
            },
          },
        },
      });

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      // Retourner les infos sans le mot de passe
      const { motDePasse: _, ...userWithoutPassword } = user;

      res.json({
        success: true,
        user: userWithoutPassword,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async updateProfile(req, res) {
    try {
      const { nom, prenom, email } = req.body;
      const userId = req.user.id;

      // Vérifier si l'email est déjà utilisé par un autre utilisateur
      if (email) {
        const existingUser = await prisma.utilisateur.findUnique({
          where: { email },
        });

        if (existingUser && existingUser.id !== userId) {
          return res.status(400).json({ error: "Cet email est déjà utilisé" });
        }
      }

      // Mettre à jour l'utilisateur
      const updatedUser = await prisma.utilisateur.update({
        where: { id: userId },
        data: {
          ...(nom && { nom }),
          ...(prenom && { prenom }),
          ...(email && { email }),
        },
      });

      // Retourner les infos sans le mot de passe
      const { motDePasse: _, ...userWithoutPassword } = updatedUser;

      res.json({
        success: true,
        message: "Profil mis à jour avec succès",
        user: userWithoutPassword,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async changePassword(req, res) {
    try {
      const { motDePasseActuel, nouveauMotDePasse } = req.body;
      const userId = req.user.id;

      if (!motDePasseActuel || !nouveauMotDePasse) {
        return res.status(400).json({
          error: "Mot de passe actuel et nouveau mot de passe sont requis",
        });
      }

      // Récupérer l'utilisateur
      const user = await prisma.utilisateur.findUnique({
        where: { id: userId },
      });

      // Vérifier le mot de passe actuel
      const isValidPassword = await bcrypt.compare(
        motDePasseActuel,
        user.motDePasse
      );

      if (!isValidPassword) {
        return res.status(401).json({ error: "Mot de passe actuel incorrect" });
      }

      // Hasher le nouveau mot de passe
      const hashedNewPassword = await bcrypt.hash(nouveauMotDePasse, 10);

      // Mettre à jour le mot de passe
      await prisma.utilisateur.update({
        where: { id: userId },
        data: { motDePasse: hashedNewPassword },
      });

      res.json({
        success: true,
        message: "Mot de passe modifié avec succès",
      });
    } catch (error) {
      console.error("Erreur lors du changement de mot de passe:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}

module.exports = AuthController;
