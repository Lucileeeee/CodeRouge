"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizFindFirstSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizOrderByWithRelationInput_schema_1 = require("./objects/UtilPasserQuizOrderByWithRelationInput.schema");
const UtilPasserQuizWhereInput_schema_1 = require("./objects/UtilPasserQuizWhereInput.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./objects/UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizScalarFieldEnum_schema_1 = require("./enums/UtilPasserQuizScalarFieldEnum.schema");
exports.UtilPasserQuizFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilPasserQuizOrderByWithRelationInput_schema_1.UtilPasserQuizOrderByWithRelationInputObjectSchema,
        UtilPasserQuizOrderByWithRelationInput_schema_1.UtilPasserQuizOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema.optional(),
    cursor: UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(UtilPasserQuizScalarFieldEnum_schema_1.UtilPasserQuizScalarFieldEnumSchema).optional(),
});
