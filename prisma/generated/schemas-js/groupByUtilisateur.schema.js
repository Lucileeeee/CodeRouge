"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurGroupBySchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereInput_schema_1 = require("./objects/UtilisateurWhereInput.schema");
const UtilisateurOrderByWithAggregationInput_schema_1 = require("./objects/UtilisateurOrderByWithAggregationInput.schema");
const UtilisateurScalarWhereWithAggregatesInput_schema_1 = require("./objects/UtilisateurScalarWhereWithAggregatesInput.schema");
const UtilisateurScalarFieldEnum_schema_1 = require("./enums/UtilisateurScalarFieldEnum.schema");
exports.UtilisateurGroupBySchema = zod_1.z.object({
    where: UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        UtilisateurOrderByWithAggregationInput_schema_1.UtilisateurOrderByWithAggregationInputObjectSchema,
        UtilisateurOrderByWithAggregationInput_schema_1.UtilisateurOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: UtilisateurScalarWhereWithAggregatesInput_schema_1.UtilisateurScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(UtilisateurScalarFieldEnum_schema_1.UtilisateurScalarFieldEnumSchema),
});
