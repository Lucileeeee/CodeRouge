const jwt = require("jsonwebtoken");
const User = require("../models/User");

class AuthController {
  static async register(req, res) {
    try {
      const { email, password, name } = req.body;

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "Cet email est déjà utilisé" });
      }

      // Créer l'utilisateur
      const user = await User.create({ email, password, name });

      // Générer le token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.status(201).json({
        message: "Utilisateur créé avec succès",
        user,
        token,
      });
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Trouver l'utilisateur
      const user = await User.findByEmail(email);
      if (!user) {
        return res
          .status(401)
          .json({ error: "Email ou mot de passe incorrect" });
      }

      // Vérifier le mot de passe
      const isValidPassword = await User.verifyPassword(
        password,
        user.password
      );
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
      const { password: _, ...userWithoutPassword } = user;

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
      const user = await User.findById(req.user.id);
      res.json({ user });
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}

module.exports = AuthController;
