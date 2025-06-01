const prisma = require("../config/database");

class Image {
  static async create(data) {
    return await prisma.image.create({
      data,
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  static async findAll() {
    return await prisma.image.findMany({
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async findById(id) {
    return await prisma.image.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  static async findByAuthor(authorId) {
    return await prisma.image.findMany({
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
    return await prisma.image.update({
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
    return await prisma.image.delete({
      where: { id },
    });
  }
}

module.exports = Image;
