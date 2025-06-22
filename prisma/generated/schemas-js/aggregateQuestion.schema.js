"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionAggregateSchema = void 0;
const zod_1 = require("zod");
const QuestionOrderByWithRelationInput_schema_1 = require("./objects/QuestionOrderByWithRelationInput.schema");
const QuestionWhereInput_schema_1 = require("./objects/QuestionWhereInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./objects/QuestionWhereUniqueInput.schema");
const QuestionCountAggregateInput_schema_1 = require("./objects/QuestionCountAggregateInput.schema");
const QuestionMinAggregateInput_schema_1 = require("./objects/QuestionMinAggregateInput.schema");
const QuestionMaxAggregateInput_schema_1 = require("./objects/QuestionMaxAggregateInput.schema");
const QuestionAvgAggregateInput_schema_1 = require("./objects/QuestionAvgAggregateInput.schema");
const QuestionSumAggregateInput_schema_1 = require("./objects/QuestionSumAggregateInput.schema");
exports.QuestionAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        QuestionOrderByWithRelationInput_schema_1.QuestionOrderByWithRelationInputObjectSchema,
        QuestionOrderByWithRelationInput_schema_1.QuestionOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema.optional(),
    cursor: QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), QuestionCountAggregateInput_schema_1.QuestionCountAggregateInputObjectSchema])
        .optional(),
    _min: QuestionMinAggregateInput_schema_1.QuestionMinAggregateInputObjectSchema.optional(),
    _max: QuestionMaxAggregateInput_schema_1.QuestionMaxAggregateInputObjectSchema.optional(),
    _avg: QuestionAvgAggregateInput_schema_1.QuestionAvgAggregateInputObjectSchema.optional(),
    _sum: QuestionSumAggregateInput_schema_1.QuestionSumAggregateInputObjectSchema.optional(),
});
