"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseAggregateSchema = void 0;
const zod_1 = require("zod");
const ReponseOrderByWithRelationInput_schema_1 = require("./objects/ReponseOrderByWithRelationInput.schema");
const ReponseWhereInput_schema_1 = require("./objects/ReponseWhereInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./objects/ReponseWhereUniqueInput.schema");
const ReponseCountAggregateInput_schema_1 = require("./objects/ReponseCountAggregateInput.schema");
const ReponseMinAggregateInput_schema_1 = require("./objects/ReponseMinAggregateInput.schema");
const ReponseMaxAggregateInput_schema_1 = require("./objects/ReponseMaxAggregateInput.schema");
const ReponseAvgAggregateInput_schema_1 = require("./objects/ReponseAvgAggregateInput.schema");
const ReponseSumAggregateInput_schema_1 = require("./objects/ReponseSumAggregateInput.schema");
exports.ReponseAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ReponseOrderByWithRelationInput_schema_1.ReponseOrderByWithRelationInputObjectSchema,
        ReponseOrderByWithRelationInput_schema_1.ReponseOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema.optional(),
    cursor: ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), ReponseCountAggregateInput_schema_1.ReponseCountAggregateInputObjectSchema])
        .optional(),
    _min: ReponseMinAggregateInput_schema_1.ReponseMinAggregateInputObjectSchema.optional(),
    _max: ReponseMaxAggregateInput_schema_1.ReponseMaxAggregateInputObjectSchema.optional(),
    _avg: ReponseAvgAggregateInput_schema_1.ReponseAvgAggregateInputObjectSchema.optional(),
    _sum: ReponseSumAggregateInput_schema_1.ReponseSumAggregateInputObjectSchema.optional(),
});
