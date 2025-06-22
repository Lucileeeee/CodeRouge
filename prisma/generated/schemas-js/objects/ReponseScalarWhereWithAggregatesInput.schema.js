"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const FloatWithAggregatesFilter_schema_1 = require("./FloatWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ReponseScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ReponseScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ReponseScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ReponseScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ReponseScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    text_reponse: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    score_reponse: zod_1.z
        .union([zod_1.z.lazy(() => FloatWithAggregatesFilter_schema_1.FloatWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
})
    .strict();
exports.ReponseScalarWhereWithAggregatesInputObjectSchema = Schema;
