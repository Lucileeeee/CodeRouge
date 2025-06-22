"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurFindFirstSchema = void 0;
const zod_1 = require("zod");
const UtilisateurOrderByWithRelationInput_schema_1 = require("./objects/UtilisateurOrderByWithRelationInput.schema");
const UtilisateurWhereInput_schema_1 = require("./objects/UtilisateurWhereInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./objects/UtilisateurWhereUniqueInput.schema");
const UtilisateurScalarFieldEnum_schema_1 = require("./enums/UtilisateurScalarFieldEnum.schema");
exports.UtilisateurFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        UtilisateurOrderByWithRelationInput_schema_1.UtilisateurOrderByWithRelationInputObjectSchema,
        UtilisateurOrderByWithRelationInput_schema_1.UtilisateurOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema.optional(),
    cursor: UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(UtilisateurScalarFieldEnum_schema_1.UtilisateurScalarFieldEnumSchema).optional(),
});
