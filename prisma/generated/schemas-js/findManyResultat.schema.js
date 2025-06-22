"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatFindManySchema = void 0;
const zod_1 = require("zod");
const ResultatOrderByWithRelationInput_schema_1 = require("./objects/ResultatOrderByWithRelationInput.schema");
const ResultatWhereInput_schema_1 = require("./objects/ResultatWhereInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./objects/ResultatWhereUniqueInput.schema");
const ResultatScalarFieldEnum_schema_1 = require("./enums/ResultatScalarFieldEnum.schema");
exports.ResultatFindManySchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema,
        ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema.optional(),
    cursor: ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(ResultatScalarFieldEnum_schema_1.ResultatScalarFieldEnumSchema).optional(),
});
