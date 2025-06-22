"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.literal(true).optional(),
    resultatId: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UtilResultatSumAggregateInputObjectSchema = Schema;
