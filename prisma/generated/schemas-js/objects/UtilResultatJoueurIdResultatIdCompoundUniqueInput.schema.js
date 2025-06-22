"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatJoueurIdResultatIdCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.number(),
    resultatId: zod_1.z.number(),
})
    .strict();
exports.UtilResultatJoueurIdResultatIdCompoundUniqueInputObjectSchema = Schema;
