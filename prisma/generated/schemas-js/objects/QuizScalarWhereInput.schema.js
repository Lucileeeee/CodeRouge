"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuizScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuizScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.QuizScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuizScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuizScalarWhereInputObjectSchema).array(),
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
})
    .strict();
exports.QuizScalarWhereInputObjectSchema = Schema;
