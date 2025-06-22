"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    utilisateurId: zod_1.z.literal(true).optional(),
    quizId: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UtilModifierQuizSumAggregateInputObjectSchema = Schema;
