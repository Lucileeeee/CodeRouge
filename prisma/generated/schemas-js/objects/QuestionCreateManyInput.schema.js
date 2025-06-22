"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    text: zod_1.z.string(),
    signalement: zod_1.z.number().optional(),
    disponible: zod_1.z.boolean(),
    imageId: zod_1.z.number(),
})
    .strict();
exports.QuestionCreateManyInputObjectSchema = Schema;
