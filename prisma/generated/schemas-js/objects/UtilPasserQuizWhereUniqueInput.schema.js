"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizJoueurIdQuizIdCompoundUniqueInput_schema_1 = require("./UtilPasserQuizJoueurIdQuizIdCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    joueurId_quizId: zod_1.z
        .lazy(() => UtilPasserQuizJoueurIdQuizIdCompoundUniqueInput_schema_1.UtilPasserQuizJoueurIdQuizIdCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilPasserQuizWhereUniqueInputObjectSchema = Schema;
