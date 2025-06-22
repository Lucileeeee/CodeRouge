"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.QuestionScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'text',
    'signalement',
    'disponible',
    'imageId',
]);
