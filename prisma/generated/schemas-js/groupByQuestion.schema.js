"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionGroupBySchema = void 0;
const zod_1 = require("zod");
const QuestionWhereInput_schema_1 = require("./objects/QuestionWhereInput.schema");
const QuestionOrderByWithAggregationInput_schema_1 = require("./objects/QuestionOrderByWithAggregationInput.schema");
const QuestionScalarWhereWithAggregatesInput_schema_1 = require("./objects/QuestionScalarWhereWithAggregatesInput.schema");
const QuestionScalarFieldEnum_schema_1 = require("./enums/QuestionScalarFieldEnum.schema");
exports.QuestionGroupBySchema = zod_1.z.object({
    where: QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        QuestionOrderByWithAggregationInput_schema_1.QuestionOrderByWithAggregationInputObjectSchema,
        QuestionOrderByWithAggregationInput_schema_1.QuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: QuestionScalarWhereWithAggregatesInput_schema_1.QuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(QuestionScalarFieldEnum_schema_1.QuestionScalarFieldEnumSchema),
});
