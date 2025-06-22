"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    utilisateurId: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    quizId: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    date: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
})
    .strict();
exports.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema = Schema;
