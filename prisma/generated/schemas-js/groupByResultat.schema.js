"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatGroupBySchema = void 0;
const zod_1 = require("zod");
const ResultatWhereInput_schema_1 = require("./objects/ResultatWhereInput.schema");
const ResultatOrderByWithAggregationInput_schema_1 = require("./objects/ResultatOrderByWithAggregationInput.schema");
const ResultatScalarWhereWithAggregatesInput_schema_1 = require("./objects/ResultatScalarWhereWithAggregatesInput.schema");
const ResultatScalarFieldEnum_schema_1 = require("./enums/ResultatScalarFieldEnum.schema");
exports.ResultatGroupBySchema = zod_1.z.object({
    where: ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        ResultatOrderByWithAggregationInput_schema_1.ResultatOrderByWithAggregationInputObjectSchema,
        ResultatOrderByWithAggregationInput_schema_1.ResultatOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: ResultatScalarWhereWithAggregatesInput_schema_1.ResultatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(ResultatScalarFieldEnum_schema_1.ResultatScalarFieldEnumSchema),
});
