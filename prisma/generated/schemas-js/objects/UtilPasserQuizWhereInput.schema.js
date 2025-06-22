"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const UtilisateurRelationFilter_schema_1 = require("./UtilisateurRelationFilter.schema");
const UtilisateurWhereInput_schema_1 = require("./UtilisateurWhereInput.schema");
const QuizRelationFilter_schema_1 = require("./QuizRelationFilter.schema");
const QuizWhereInput_schema_1 = require("./QuizWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilPasserQuizWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilPasserQuizWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilPasserQuizWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilPasserQuizWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilPasserQuizWhereInputObjectSchema).array(),
    ])
        .optional(),
    joueurId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    quizId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    date: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    joueur: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurRelationFilter_schema_1.UtilisateurRelationFilterObjectSchema),
        zod_1.z.lazy(() => UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema),
    ])
        .optional(),
    quiz: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizRelationFilter_schema_1.QuizRelationFilterObjectSchema),
        zod_1.z.lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilPasserQuizWhereInputObjectSchema = Schema;
