"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionFindFirstSchema = void 0;
const zod_1 = require("zod");
const QuestionOrderByWithRelationInput_schema_1 = require("./objects/QuestionOrderByWithRelationInput.schema");
const QuestionWhereInput_schema_1 = require("./objects/QuestionWhereInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./objects/QuestionWhereUniqueInput.schema");
const QuestionScalarFieldEnum_schema_1 = require("./enums/QuestionScalarFieldEnum.schema");
exports.QuestionFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        QuestionOrderByWithRelationInput_schema_1.QuestionOrderByWithRelationInputObjectSchema,
        QuestionOrderByWithRelationInput_schema_1.QuestionOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema.optional(),
    cursor: QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(QuestionScalarFieldEnum_schema_1.QuestionScalarFieldEnumSchema).optional(),
});
