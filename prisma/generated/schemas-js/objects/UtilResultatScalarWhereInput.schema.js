"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilResultatScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilResultatScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilResultatScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilResultatScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UtilResultatScalarWhereInputObjectSchema).array(),
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
})
    .strict();
exports.UtilResultatScalarWhereInputObjectSchema = Schema;
