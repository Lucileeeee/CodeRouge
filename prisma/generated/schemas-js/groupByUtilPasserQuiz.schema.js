"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizGroupBySchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereInput_schema_1 = require("./objects/UtilPasserQuizWhereInput.schema");
const UtilPasserQuizOrderByWithAggregationInput_schema_1 = require("./objects/UtilPasserQuizOrderByWithAggregationInput.schema");
const UtilPasserQuizScalarWhereWithAggregatesInput_schema_1 = require("./objects/UtilPasserQuizScalarWhereWithAggregatesInput.schema");
const UtilPasserQuizScalarFieldEnum_schema_1 = require("./enums/UtilPasserQuizScalarFieldEnum.schema");
exports.UtilPasserQuizGroupBySchema = zod_1.z.object({
    where: UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        UtilPasserQuizOrderByWithAggregationInput_schema_1.UtilPasserQuizOrderByWithAggregationInputObjectSchema,
        UtilPasserQuizOrderByWithAggregationInput_schema_1.UtilPasserQuizOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: UtilPasserQuizScalarWhereWithAggregatesInput_schema_1.UtilPasserQuizScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(UtilPasserQuizScalarFieldEnum_schema_1.UtilPasserQuizScalarFieldEnumSchema),
});
