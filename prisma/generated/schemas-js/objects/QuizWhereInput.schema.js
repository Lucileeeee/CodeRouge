"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const UtilisateurRelationFilter_schema_1 = require("./UtilisateurRelationFilter.schema");
const UtilisateurWhereInput_schema_1 = require("./UtilisateurWhereInput.schema");
const UtilModifierQuizListRelationFilter_schema_1 = require("./UtilModifierQuizListRelationFilter.schema");
const UtilPasserQuizListRelationFilter_schema_1 = require("./UtilPasserQuizListRelationFilter.schema");
const QuestionListRelationFilter_schema_1 = require("./QuestionListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuizWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuizWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.QuizWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuizWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuizWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    titre: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    disponible: zod_1.z
        .union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema), zod_1.z.boolean()])
        .optional(),
    autheurId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    autheur: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurRelationFilter_schema_1.UtilisateurRelationFilterObjectSchema),
        zod_1.z.lazy(() => UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema),
    ])
        .optional(),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizListRelationFilter_schema_1.UtilModifierQuizListRelationFilterObjectSchema)
        .optional(),
    joueurs: zod_1.z
        .lazy(() => UtilPasserQuizListRelationFilter_schema_1.UtilPasserQuizListRelationFilterObjectSchema)
        .optional(),
    questions: zod_1.z.lazy(() => QuestionListRelationFilter_schema_1.QuestionListRelationFilterObjectSchema).optional(),
})
    .strict();
exports.QuizWhereInputObjectSchema = Schema;
