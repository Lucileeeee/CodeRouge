"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    email: zod_1.z.string(),
    nom: zod_1.z.string(),
    prenom: zod_1.z.string(),
    mdp: zod_1.z.string(),
    role: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(),
})
    .strict();
exports.UtilisateurCreateManyInputObjectSchema = Schema;
