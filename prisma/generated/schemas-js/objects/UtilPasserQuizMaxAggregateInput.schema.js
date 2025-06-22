"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.literal(true).optional(),
    quizId: zod_1.z.literal(true).optional(),
    date: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UtilPasserQuizMaxAggregateInputObjectSchema = Schema;
