"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.number(),
    quizId: zod_1.z.number(),
    date: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.UtilPasserQuizCreateManyInputObjectSchema = Schema;
