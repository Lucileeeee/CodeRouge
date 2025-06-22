"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const EnumRoleFilter_schema_1 = require("./EnumRoleFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
const QuizListRelationFilter_schema_1 = require("./QuizListRelationFilter.schema");
const UtilModifierQuizListRelationFilter_schema_1 = require("./UtilModifierQuizListRelationFilter.schema");
const UtilPasserQuizListRelationFilter_schema_1 = require("./UtilPasserQuizListRelationFilter.schema");
const UtilResultatListRelationFilter_schema_1 = require("./UtilResultatListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilisateurWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilisateurWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilisateurWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilisateurWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilisateurWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    nom: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    prenom: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    mdp: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    role: zod_1.z
        .union([
        zod_1.z.lazy(() => EnumRoleFilter_schema_1.EnumRoleFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema),
    ])
        .optional(),
    quizs: zod_1.z.lazy(() => QuizListRelationFilter_schema_1.QuizListRelationFilterObjectSchema).optional(),
    quizsModifier: zod_1.z
        .lazy(() => UtilModifierQuizListRelationFilter_schema_1.UtilModifierQuizListRelationFilterObjectSchema)
        .optional(),
    quizsPasser: zod_1.z
        .lazy(() => UtilPasserQuizListRelationFilter_schema_1.UtilPasserQuizListRelationFilterObjectSchema)
        .optional(),
    resultats: zod_1.z
        .lazy(() => UtilResultatListRelationFilter_schema_1.UtilResultatListRelationFilterObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurWhereInputObjectSchema = Schema;
