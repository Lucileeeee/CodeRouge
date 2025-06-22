"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const UtilisateurRelationFilter_schema_1 = require("./UtilisateurRelationFilter.schema");
const UtilisateurWhereInput_schema_1 = require("./UtilisateurWhereInput.schema");
const ResultatRelationFilter_schema_1 = require("./ResultatRelationFilter.schema");
const ResultatWhereInput_schema_1 = require("./ResultatWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilResultatWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilResultatWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilResultatWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilResultatWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilResultatWhereInputObjectSchema).array(),
    ])
        .optional(),
    joueurId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    resultatId: zod_1.z
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
    resultat: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatRelationFilter_schema_1.ResultatRelationFilterObjectSchema),
        zod_1.z.lazy(() => ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilResultatWhereInputObjectSchema = Schema;
