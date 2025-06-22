"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    text: zod_1.z.literal(true).optional(),
    signalement: zod_1.z.literal(true).optional(),
    disponible: zod_1.z.literal(true).optional(),
    imageId: zod_1.z.literal(true).optional(),
})
    .strict();
exports.QuestionMinAggregateInputObjectSchema = Schema;
