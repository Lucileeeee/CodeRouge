"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizAggregateSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizOrderByWithRelationInput_schema_1 = require("./objects/UtilPasserQuizOrderByWithRelationInput.schema");
const UtilPasserQuizWhereInput_schema_1 = require("./objects/UtilPasserQuizWhereInput.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./objects/UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizCountAggregateInput_schema_1 = require("./objects/UtilPasserQuizCountAggregateInput.schema");
const UtilPasserQuizMinAggregateInput_schema_1 = require("./objects/UtilPasserQuizMinAggregateInput.schema");
const UtilPasserQuizMaxAggregateInput_schema_1 = require("./objects/UtilPasserQuizMaxAggregateInput.schema");
const UtilPasserQuizAvgAggregateInput_schema_1 = require("./objects/UtilPasserQuizAvgAggregateInput.schema");
const UtilPasserQuizSumAggregateInput_schema_1 = require("./objects/UtilPasserQuizSumAggregateInput.schema");
exports.UtilPasserQuizAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilPasserQuizOrderByWithRelationInput_schema_1.UtilPasserQuizOrderByWithRelationInputObjectSchema,
        UtilPasserQuizOrderByWithRelationInput_schema_1.UtilPasserQuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema.optional(),
    cursor: UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), UtilPasserQuizCountAggregateInput_schema_1.UtilPasserQuizCountAggregateInputObjectSchema])
        .optional(),
    _min: UtilPasserQuizMinAggregateInput_schema_1.UtilPasserQuizMinAggregateInputObjectSchema.optional(),
    _max: UtilPasserQuizMaxAggregateInput_schema_1.UtilPasserQuizMaxAggregateInputObjectSchema.optional(),
    _avg: UtilPasserQuizAvgAggregateInput_schema_1.UtilPasserQuizAvgAggregateInputObjectSchema.optional(),
    _sum: UtilPasserQuizSumAggregateInput_schema_1.UtilPasserQuizSumAggregateInputObjectSchema.optional(),
});
