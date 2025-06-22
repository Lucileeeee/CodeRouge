"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizJoueurIdQuizIdCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.number(),
    quizId: zod_1.z.number(),
})
    .strict();
exports.UtilPasserQuizJoueurIdQuizIdCompoundUniqueInputObjectSchema = Schema;
