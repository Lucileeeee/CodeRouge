"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.QuizScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'createdAt',
    'titre',
    'disponible',
    'autheurId',
]);
