"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const EnumRoleWithAggregatesFilter_schema_1 = require("./EnumRoleWithAggregatesFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    nom: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    prenom: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    mdp: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    role: zod_1.z
        .union([
        zod_1.z.lazy(() => EnumRoleWithAggregatesFilter_schema_1.EnumRoleWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurScalarWhereWithAggregatesInputObjectSchema = Schema;
