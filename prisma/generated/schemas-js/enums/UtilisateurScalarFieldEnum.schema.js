"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.UtilisateurScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'email',
    'nom',
    'prenom',
    'mdp',
    'role',
]);
