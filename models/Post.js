const prisma = require("../config/database");

class Post {
  static async create(data) {
    return await prisma.post.create({
      data,
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  static async findAll() {
    return await prisma.post.findMany({
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async findById(id) {
    return await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  static async findByAuthor(authorId) {
    return await prisma.post.findMany({
      where: { authorId },
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async update(id, data) {
    return await prisma.post.update({
      where: { id },
      data,
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  static async delete(id) {
    return await prisma.post.delete({
      where: { id },
    });
  }
}

module.exports = Post;
