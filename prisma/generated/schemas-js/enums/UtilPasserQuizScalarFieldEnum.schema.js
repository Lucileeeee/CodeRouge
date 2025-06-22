"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.UtilPasserQuizScalarFieldEnumSchema = zod_1.z.enum([
    'joueurId',
    'quizId',
    'date',
]);
