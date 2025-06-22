"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const ImageRelationFilter_schema_1 = require("./ImageRelationFilter.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const ReponseListRelationFilter_schema_1 = require("./ReponseListRelationFilter.schema");
const UtilResultatListRelationFilter_schema_1 = require("./UtilResultatListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ResultatWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ResultatWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ResultatWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ResultatWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ResultatWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    titre: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    resultat_score_min: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    resultat_score_max: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    imageId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    image: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageRelationFilter_schema_1.ImageRelationFilterObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    reponses: zod_1.z.lazy(() => ReponseListRelationFilter_schema_1.ReponseListRelationFilterObjectSchema).optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatListRelationFilter_schema_1.UtilResultatListRelationFilterObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatWhereInputObjectSchema = Schema;
