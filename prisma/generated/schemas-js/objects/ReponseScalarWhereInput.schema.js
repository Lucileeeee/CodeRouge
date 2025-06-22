"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ReponseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ReponseScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ReponseScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ReponseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ReponseScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    text_reponse: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    score_reponse: zod_1.z
        .union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema), zod_1.z.number()])
        .optional(),
})
    .strict();
exports.ReponseScalarWhereInputObjectSchema = Schema;
