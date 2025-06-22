"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurAggregateSchema = void 0;
const zod_1 = require("zod");
const UtilisateurOrderByWithRelationInput_schema_1 = require("./objects/UtilisateurOrderByWithRelationInput.schema");
const UtilisateurWhereInput_schema_1 = require("./objects/UtilisateurWhereInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./objects/UtilisateurWhereUniqueInput.schema");
const UtilisateurCountAggregateInput_schema_1 = require("./objects/UtilisateurCountAggregateInput.schema");
const UtilisateurMinAggregateInput_schema_1 = require("./objects/UtilisateurMinAggregateInput.schema");
const UtilisateurMaxAggregateInput_schema_1 = require("./objects/UtilisateurMaxAggregateInput.schema");
const UtilisateurAvgAggregateInput_schema_1 = require("./objects/UtilisateurAvgAggregateInput.schema");
const UtilisateurSumAggregateInput_schema_1 = require("./objects/UtilisateurSumAggregateInput.schema");
exports.UtilisateurAggregateSchema = zod_1.z.object({
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
    _count: zod_1.z
        .union([zod_1.z.literal(true), UtilisateurCountAggregateInput_schema_1.UtilisateurCountAggregateInputObjectSchema])
        .optional(),
    _min: UtilisateurMinAggregateInput_schema_1.UtilisateurMinAggregateInputObjectSchema.optional(),
    _max: UtilisateurMaxAggregateInput_schema_1.UtilisateurMaxAggregateInputObjectSchema.optional(),
    _avg: UtilisateurAvgAggregateInput_schema_1.UtilisateurAvgAggregateInputObjectSchema.optional(),
    _sum: UtilisateurSumAggregateInput_schema_1.UtilisateurSumAggregateInputObjectSchema.optional(),
});
