const { z } = require("zod");

const PromptSchema = z.object({
  prompt: z.string().min(1, "Le prompt est requis"),
});

module.exports = { PromptSchema };
