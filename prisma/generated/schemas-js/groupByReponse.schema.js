"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseGroupBySchema = void 0;
const zod_1 = require("zod");
const ReponseWhereInput_schema_1 = require("./objects/ReponseWhereInput.schema");
const ReponseOrderByWithAggregationInput_schema_1 = require("./objects/ReponseOrderByWithAggregationInput.schema");
const ReponseScalarWhereWithAggregatesInput_schema_1 = require("./objects/ReponseScalarWhereWithAggregatesInput.schema");
const ReponseScalarFieldEnum_schema_1 = require("./enums/ReponseScalarFieldEnum.schema");
exports.ReponseGroupBySchema = zod_1.z.object({
    where: ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        ReponseOrderByWithAggregationInput_schema_1.ReponseOrderByWithAggregationInputObjectSchema,
        ReponseOrderByWithAggregationInput_schema_1.ReponseOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: ReponseScalarWhereWithAggregatesInput_schema_1.ReponseScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(ReponseScalarFieldEnum_schema_1.ReponseScalarFieldEnumSchema),
});
