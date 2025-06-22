"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatAggregateSchema = void 0;
const zod_1 = require("zod");
const ResultatOrderByWithRelationInput_schema_1 = require("./objects/ResultatOrderByWithRelationInput.schema");
const ResultatWhereInput_schema_1 = require("./objects/ResultatWhereInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./objects/ResultatWhereUniqueInput.schema");
const ResultatCountAggregateInput_schema_1 = require("./objects/ResultatCountAggregateInput.schema");
const ResultatMinAggregateInput_schema_1 = require("./objects/ResultatMinAggregateInput.schema");
const ResultatMaxAggregateInput_schema_1 = require("./objects/ResultatMaxAggregateInput.schema");
const ResultatAvgAggregateInput_schema_1 = require("./objects/ResultatAvgAggregateInput.schema");
const ResultatSumAggregateInput_schema_1 = require("./objects/ResultatSumAggregateInput.schema");
exports.ResultatAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema,
        ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema.optional(),
    cursor: ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), ResultatCountAggregateInput_schema_1.ResultatCountAggregateInputObjectSchema])
        .optional(),
    _min: ResultatMinAggregateInput_schema_1.ResultatMinAggregateInputObjectSchema.optional(),
    _max: ResultatMaxAggregateInput_schema_1.ResultatMaxAggregateInputObjectSchema.optional(),
    _avg: ResultatAvgAggregateInput_schema_1.ResultatAvgAggregateInputObjectSchema.optional(),
    _sum: ResultatSumAggregateInput_schema_1.ResultatSumAggregateInputObjectSchema.optional(),
});
