"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizGroupBySchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereInput_schema_1 = require("./objects/UtilModifierQuizWhereInput.schema");
const UtilModifierQuizOrderByWithAggregationInput_schema_1 = require("./objects/UtilModifierQuizOrderByWithAggregationInput.schema");
const UtilModifierQuizScalarWhereWithAggregatesInput_schema_1 = require("./objects/UtilModifierQuizScalarWhereWithAggregatesInput.schema");
const UtilModifierQuizScalarFieldEnum_schema_1 = require("./enums/UtilModifierQuizScalarFieldEnum.schema");
exports.UtilModifierQuizGroupBySchema = zod_1.z.object({
    where: UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        UtilModifierQuizOrderByWithAggregationInput_schema_1.UtilModifierQuizOrderByWithAggregationInputObjectSchema,
        UtilModifierQuizOrderByWithAggregationInput_schema_1.UtilModifierQuizOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: UtilModifierQuizScalarWhereWithAggregatesInput_schema_1.UtilModifierQuizScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(UtilModifierQuizScalarFieldEnum_schema_1.UtilModifierQuizScalarFieldEnumSchema),
});
