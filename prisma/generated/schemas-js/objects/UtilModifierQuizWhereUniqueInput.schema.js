"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizUtilisateurIdQuizIdCompoundUniqueInput_schema_1 = require("./UtilModifierQuizUtilisateurIdQuizIdCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    utilisateurId_quizId: zod_1.z
        .lazy(() => UtilModifierQuizUtilisateurIdQuizIdCompoundUniqueInput_schema_1.UtilModifierQuizUtilisateurIdQuizIdCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilModifierQuizWhereUniqueInputObjectSchema = Schema;
