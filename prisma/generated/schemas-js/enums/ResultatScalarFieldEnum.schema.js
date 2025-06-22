"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ResultatScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'titre',
    'description',
    'resultat_score_min',
    'resultat_score_max',
    'imageId',
]);
