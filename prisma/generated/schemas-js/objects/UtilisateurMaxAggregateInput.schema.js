"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    email: zod_1.z.literal(true).optional(),
    nom: zod_1.z.literal(true).optional(),
    prenom: zod_1.z.literal(true).optional(),
    mdp: zod_1.z.literal(true).optional(),
    role: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UtilisateurMaxAggregateInputObjectSchema = Schema;
