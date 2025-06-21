const express = require("express");
const router = express.Router();

//const authRoutes = require("./auth");
//router.use("/auth", authRoutes);

// Route de test
router.get("/", (req, res) => {
  res.json({
    message: "API CodeRouge Backend",
    version: "1.0.0",
    endpoints: {
      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        profile: "GET /api/auth/profile (avec token)",
      },
      posts: {
        getAll: "GET /api/posts",
        getById: "GET /api/posts/:id",
        create: "POST /api/posts (avec token)",
        myPosts: "GET /api/posts/user/my-posts (avec token)",
        update: "PUT /api/posts/:id (avec token)",
        delete: "DELETE /api/posts/:id (avec token)",
      },
    },
  });
});

module.exports = router;
