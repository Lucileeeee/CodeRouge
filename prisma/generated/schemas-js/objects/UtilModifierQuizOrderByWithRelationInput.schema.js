"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilisateurOrderByWithRelationInput_schema_1 = require("./UtilisateurOrderByWithRelationInput.schema");
const QuizOrderByWithRelationInput_schema_1 = require("./QuizOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    utilisateurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    utilisateur: zod_1.z
        .lazy(() => UtilisateurOrderByWithRelationInput_schema_1.UtilisateurOrderByWithRelationInputObjectSchema)
        .optional(),
    quiz: zod_1.z.lazy(() => QuizOrderByWithRelationInput_schema_1.QuizOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.UtilModifierQuizOrderByWithRelationInputObjectSchema = Schema;
