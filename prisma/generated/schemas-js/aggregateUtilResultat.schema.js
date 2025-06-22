"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatAggregateSchema = void 0;
const zod_1 = require("zod");
const UtilResultatOrderByWithRelationInput_schema_1 = require("./objects/UtilResultatOrderByWithRelationInput.schema");
const UtilResultatWhereInput_schema_1 = require("./objects/UtilResultatWhereInput.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./objects/UtilResultatWhereUniqueInput.schema");
const UtilResultatCountAggregateInput_schema_1 = require("./objects/UtilResultatCountAggregateInput.schema");
const UtilResultatMinAggregateInput_schema_1 = require("./objects/UtilResultatMinAggregateInput.schema");
const UtilResultatMaxAggregateInput_schema_1 = require("./objects/UtilResultatMaxAggregateInput.schema");
const UtilResultatAvgAggregateInput_schema_1 = require("./objects/UtilResultatAvgAggregateInput.schema");
const UtilResultatSumAggregateInput_schema_1 = require("./objects/UtilResultatSumAggregateInput.schema");
exports.UtilResultatAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilResultatOrderByWithRelationInput_schema_1.UtilResultatOrderByWithRelationInputObjectSchema,
        UtilResultatOrderByWithRelationInput_schema_1.UtilResultatOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema.optional(),
    cursor: UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), UtilResultatCountAggregateInput_schema_1.UtilResultatCountAggregateInputObjectSchema])
        .optional(),
    _min: UtilResultatMinAggregateInput_schema_1.UtilResultatMinAggregateInputObjectSchema.optional(),
    _max: UtilResultatMaxAggregateInput_schema_1.UtilResultatMaxAggregateInputObjectSchema.optional(),
    _avg: UtilResultatAvgAggregateInput_schema_1.UtilResultatAvgAggregateInputObjectSchema.optional(),
    _sum: UtilResultatSumAggregateInput_schema_1.UtilResultatSumAggregateInputObjectSchema.optional(),
});
