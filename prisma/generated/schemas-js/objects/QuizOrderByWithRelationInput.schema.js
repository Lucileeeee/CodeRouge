"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilisateurOrderByWithRelationInput_schema_1 = require("./UtilisateurOrderByWithRelationInput.schema");
const UtilModifierQuizOrderByRelationAggregateInput_schema_1 = require("./UtilModifierQuizOrderByRelationAggregateInput.schema");
const UtilPasserQuizOrderByRelationAggregateInput_schema_1 = require("./UtilPasserQuizOrderByRelationAggregateInput.schema");
const QuestionOrderByRelationAggregateInput_schema_1 = require("./QuestionOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    disponible: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    autheurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    autheur: zod_1.z
        .lazy(() => UtilisateurOrderByWithRelationInput_schema_1.UtilisateurOrderByWithRelationInputObjectSchema)
        .optional(),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizOrderByRelationAggregateInput_schema_1.UtilModifierQuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    joueurs: zod_1.z
        .lazy(() => UtilPasserQuizOrderByRelationAggregateInput_schema_1.UtilPasserQuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionOrderByRelationAggregateInput_schema_1.QuestionOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuizOrderByWithRelationInputObjectSchema = Schema;
