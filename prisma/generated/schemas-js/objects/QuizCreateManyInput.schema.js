"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    createdAt: zod_1.z.coerce.date().optional(),
    titre: zod_1.z.string(),
    disponible: zod_1.z.boolean().optional(),
    autheurId: zod_1.z.number(),
})
    .strict();
exports.QuizCreateManyInputObjectSchema = Schema;
