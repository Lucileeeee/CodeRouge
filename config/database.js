const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

module.exports = prisma;
/*
Note : comme ton projet est en CommonJS (require), on utilise module.exports.
require pas sure */
