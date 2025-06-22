"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizGroupBySchema = void 0;
const zod_1 = require("zod");
const QuizWhereInput_schema_1 = require("./objects/QuizWhereInput.schema");
const QuizOrderByWithAggregationInput_schema_1 = require("./objects/QuizOrderByWithAggregationInput.schema");
const QuizScalarWhereWithAggregatesInput_schema_1 = require("./objects/QuizScalarWhereWithAggregatesInput.schema");
const QuizScalarFieldEnum_schema_1 = require("./enums/QuizScalarFieldEnum.schema");
exports.QuizGroupBySchema = zod_1.z.object({
    where: QuizWhereInput_schema_1.QuizWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        QuizOrderByWithAggregationInput_schema_1.QuizOrderByWithAggregationInputObjectSchema,
        QuizOrderByWithAggregationInput_schema_1.QuizOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: QuizScalarWhereWithAggregatesInput_schema_1.QuizScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(QuizScalarFieldEnum_schema_1.QuizScalarFieldEnumSchema),
});
