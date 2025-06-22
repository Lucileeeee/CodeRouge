"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizAggregateSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizOrderByWithRelationInput_schema_1 = require("./objects/UtilModifierQuizOrderByWithRelationInput.schema");
const UtilModifierQuizWhereInput_schema_1 = require("./objects/UtilModifierQuizWhereInput.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./objects/UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizCountAggregateInput_schema_1 = require("./objects/UtilModifierQuizCountAggregateInput.schema");
const UtilModifierQuizMinAggregateInput_schema_1 = require("./objects/UtilModifierQuizMinAggregateInput.schema");
const UtilModifierQuizMaxAggregateInput_schema_1 = require("./objects/UtilModifierQuizMaxAggregateInput.schema");
const UtilModifierQuizAvgAggregateInput_schema_1 = require("./objects/UtilModifierQuizAvgAggregateInput.schema");
const UtilModifierQuizSumAggregateInput_schema_1 = require("./objects/UtilModifierQuizSumAggregateInput.schema");
exports.UtilModifierQuizAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilModifierQuizOrderByWithRelationInput_schema_1.UtilModifierQuizOrderByWithRelationInputObjectSchema,
        UtilModifierQuizOrderByWithRelationInput_schema_1.UtilModifierQuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema.optional(),
    cursor: UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), UtilModifierQuizCountAggregateInput_schema_1.UtilModifierQuizCountAggregateInputObjectSchema])
        .optional(),
    _min: UtilModifierQuizMinAggregateInput_schema_1.UtilModifierQuizMinAggregateInputObjectSchema.optional(),
    _max: UtilModifierQuizMaxAggregateInput_schema_1.UtilModifierQuizMaxAggregateInputObjectSchema.optional(),
    _avg: UtilModifierQuizAvgAggregateInput_schema_1.UtilModifierQuizAvgAggregateInputObjectSchema.optional(),
    _sum: UtilModifierQuizSumAggregateInput_schema_1.UtilModifierQuizSumAggregateInputObjectSchema.optional(),
});
