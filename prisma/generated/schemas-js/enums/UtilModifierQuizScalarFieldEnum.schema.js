"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.UtilModifierQuizScalarFieldEnumSchema = zod_1.z.enum([
    'utilisateurId',
    'quizId',
    'date',
]);
