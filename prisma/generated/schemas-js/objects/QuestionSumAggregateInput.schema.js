"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    signalement: zod_1.z.literal(true).optional(),
    imageId: zod_1.z.literal(true).optional(),
})
    .strict();
exports.QuestionSumAggregateInputObjectSchema = Schema;
