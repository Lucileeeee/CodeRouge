/* const Post = require("../models/Post");

class PostController {
  static async create(req, res) {
    try {
      const { title, content, published = false } = req.body;
      const authorId = req.user.id;

      const post = await Post.create({
        title,
        content,
        published,
        authorId,
      });

      res.status(201).json({
        message: "Post créé avec succès",
        post,
      });
    } catch (error) {
      console.error("Erreur lors de la création du post:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getAll(req, res) {
    try {
      const posts = await Post.findAll();
      res.json({ posts });
    } catch (error) {
      console.error("Erreur lors de la récupération des posts:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findById(parseInt(id));

      if (!post) {
        return res.status(404).json({ error: "Post non trouvé" });
      }

      res.json({ post });
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getMyPosts(req, res) {
    try {
      const posts = await Post.findByAuthor(req.user.id);
      res.json({ posts });
    } catch (error) {
      console.error("Erreur lors de la récupération des posts:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { title, content, published } = req.body;

      // Vérifier que le post existe et appartient à l'utilisateur
      const existingPost = await Post.findById(parseInt(id));
      if (!existingPost) {
        return res.status(404).json({ error: "Post non trouvé" });
      }

      if (existingPost.authorId !== req.user.id) {
        return res
          .status(403)
          .json({
            error: "Vous n'avez pas l'autorisation de modifier ce post",
          });
      }

      const updatedPost = await Post.update(parseInt(id), {
        title,
        content,
        published,
      });

      res.json({
        message: "Post mis à jour avec succès",
        post: updatedPost,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du post:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      // Vérifier que le post existe et appartient à l'utilisateur
      const existingPost = await Post.findById(parseInt(id));
      if (!existingPost) {
        return res.status(404).json({ error: "Post non trouvé" });
      }

      if (existingPost.authorId !== req.user.id) {
        return res
          .status(403)
          .json({
            error: "Vous n'avez pas l'autorisation de supprimer ce post",
          });
      }

      await Post.delete(parseInt(id));

      res.json({ message: "Post supprimé avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression du post:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}

module.exports = PostController;
 */
