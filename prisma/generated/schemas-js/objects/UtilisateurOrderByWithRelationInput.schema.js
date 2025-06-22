"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const QuizOrderByRelationAggregateInput_schema_1 = require("./QuizOrderByRelationAggregateInput.schema");
const UtilModifierQuizOrderByRelationAggregateInput_schema_1 = require("./UtilModifierQuizOrderByRelationAggregateInput.schema");
const UtilPasserQuizOrderByRelationAggregateInput_schema_1 = require("./UtilPasserQuizOrderByRelationAggregateInput.schema");
const UtilResultatOrderByRelationAggregateInput_schema_1 = require("./UtilResultatOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    nom: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    prenom: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    mdp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizs: zod_1.z
        .lazy(() => QuizOrderByRelationAggregateInput_schema_1.QuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    quizsModifier: zod_1.z
        .lazy(() => UtilModifierQuizOrderByRelationAggregateInput_schema_1.UtilModifierQuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    quizsPasser: zod_1.z
        .lazy(() => UtilPasserQuizOrderByRelationAggregateInput_schema_1.UtilPasserQuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    resultats: zod_1.z
        .lazy(() => UtilResultatOrderByRelationAggregateInput_schema_1.UtilResultatOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurOrderByWithRelationInputObjectSchema = Schema;
