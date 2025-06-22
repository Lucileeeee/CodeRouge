"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizFindFirstSchema = void 0;
const zod_1 = require("zod");
const QuizOrderByWithRelationInput_schema_1 = require("./objects/QuizOrderByWithRelationInput.schema");
const QuizWhereInput_schema_1 = require("./objects/QuizWhereInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./objects/QuizWhereUniqueInput.schema");
const QuizScalarFieldEnum_schema_1 = require("./enums/QuizScalarFieldEnum.schema");
exports.QuizFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        QuizOrderByWithRelationInput_schema_1.QuizOrderByWithRelationInputObjectSchema,
        QuizOrderByWithRelationInput_schema_1.QuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: QuizWhereInput_schema_1.QuizWhereInputObjectSchema.optional(),
    cursor: QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(QuizScalarFieldEnum_schema_1.QuizScalarFieldEnumSchema).optional(),
});
