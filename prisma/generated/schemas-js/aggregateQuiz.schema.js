"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizAggregateSchema = void 0;
const zod_1 = require("zod");
const QuizOrderByWithRelationInput_schema_1 = require("./objects/QuizOrderByWithRelationInput.schema");
const QuizWhereInput_schema_1 = require("./objects/QuizWhereInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./objects/QuizWhereUniqueInput.schema");
const QuizCountAggregateInput_schema_1 = require("./objects/QuizCountAggregateInput.schema");
const QuizMinAggregateInput_schema_1 = require("./objects/QuizMinAggregateInput.schema");
const QuizMaxAggregateInput_schema_1 = require("./objects/QuizMaxAggregateInput.schema");
const QuizAvgAggregateInput_schema_1 = require("./objects/QuizAvgAggregateInput.schema");
const QuizSumAggregateInput_schema_1 = require("./objects/QuizSumAggregateInput.schema");
exports.QuizAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        QuizOrderByWithRelationInput_schema_1.QuizOrderByWithRelationInputObjectSchema,
        QuizOrderByWithRelationInput_schema_1.QuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: QuizWhereInput_schema_1.QuizWhereInputObjectSchema.optional(),
    cursor: QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), QuizCountAggregateInput_schema_1.QuizCountAggregateInputObjectSchema])
        .optional(),
    _min: QuizMinAggregateInput_schema_1.QuizMinAggregateInputObjectSchema.optional(),
    _max: QuizMaxAggregateInput_schema_1.QuizMaxAggregateInputObjectSchema.optional(),
    _avg: QuizAvgAggregateInput_schema_1.QuizAvgAggregateInputObjectSchema.optional(),
    _sum: QuizSumAggregateInput_schema_1.QuizSumAggregateInputObjectSchema.optional(),
});
