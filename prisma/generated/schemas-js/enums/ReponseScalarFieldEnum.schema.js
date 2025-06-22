"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ReponseScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'text_reponse',
    'score_reponse',
]);
