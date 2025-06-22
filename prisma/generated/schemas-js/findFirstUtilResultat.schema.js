"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatFindFirstSchema = void 0;
const zod_1 = require("zod");
const UtilResultatOrderByWithRelationInput_schema_1 = require("./objects/UtilResultatOrderByWithRelationInput.schema");
const UtilResultatWhereInput_schema_1 = require("./objects/UtilResultatWhereInput.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./objects/UtilResultatWhereUniqueInput.schema");
const UtilResultatScalarFieldEnum_schema_1 = require("./enums/UtilResultatScalarFieldEnum.schema");
exports.UtilResultatFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilResultatOrderByWithRelationInput_schema_1.UtilResultatOrderByWithRelationInputObjectSchema,
        UtilResultatOrderByWithRelationInput_schema_1.UtilResultatOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema.optional(),
    cursor: UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(UtilResultatScalarFieldEnum_schema_1.UtilResultatScalarFieldEnumSchema).optional(),
});
