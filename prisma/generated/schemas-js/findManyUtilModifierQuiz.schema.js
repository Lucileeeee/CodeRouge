"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizFindManySchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizOrderByWithRelationInput_schema_1 = require("./objects/UtilModifierQuizOrderByWithRelationInput.schema");
const UtilModifierQuizWhereInput_schema_1 = require("./objects/UtilModifierQuizWhereInput.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./objects/UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizScalarFieldEnum_schema_1 = require("./enums/UtilModifierQuizScalarFieldEnum.schema");
exports.UtilModifierQuizFindManySchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilModifierQuizOrderByWithRelationInput_schema_1.UtilModifierQuizOrderByWithRelationInputObjectSchema,
        UtilModifierQuizOrderByWithRelationInput_schema_1.UtilModifierQuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema.optional(),
    cursor: UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(UtilModifierQuizScalarFieldEnum_schema_1.UtilModifierQuizScalarFieldEnumSchema).optional(),
});
