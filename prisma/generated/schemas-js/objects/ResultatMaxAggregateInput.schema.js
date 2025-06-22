"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    titre: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    resultat_score_min: zod_1.z.literal(true).optional(),
    resultat_score_max: zod_1.z.literal(true).optional(),
    imageId: zod_1.z.literal(true).optional(),
})
    .strict();
exports.ResultatMaxAggregateInputObjectSchema = Schema;
