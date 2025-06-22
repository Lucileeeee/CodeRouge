"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatGroupBySchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereInput_schema_1 = require("./objects/UtilResultatWhereInput.schema");
const UtilResultatOrderByWithAggregationInput_schema_1 = require("./objects/UtilResultatOrderByWithAggregationInput.schema");
const UtilResultatScalarWhereWithAggregatesInput_schema_1 = require("./objects/UtilResultatScalarWhereWithAggregatesInput.schema");
const UtilResultatScalarFieldEnum_schema_1 = require("./enums/UtilResultatScalarFieldEnum.schema");
exports.UtilResultatGroupBySchema = zod_1.z.object({
    where: UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        UtilResultatOrderByWithAggregationInput_schema_1.UtilResultatOrderByWithAggregationInputObjectSchema,
        UtilResultatOrderByWithAggregationInput_schema_1.UtilResultatOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: UtilResultatScalarWhereWithAggregatesInput_schema_1.UtilResultatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(UtilResultatScalarFieldEnum_schema_1.UtilResultatScalarFieldEnumSchema),
});
