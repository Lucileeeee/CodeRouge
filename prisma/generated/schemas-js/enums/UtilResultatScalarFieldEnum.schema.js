"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.UtilResultatScalarFieldEnumSchema = zod_1.z.enum([
    'joueurId',
    'resultatId',
    'date',
]);
