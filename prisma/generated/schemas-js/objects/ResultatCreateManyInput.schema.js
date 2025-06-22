"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    titre: zod_1.z.string(),
    description: zod_1.z.string(),
    resultat_score_min: zod_1.z.number(),
    resultat_score_max: zod_1.z.number(),
    imageId: zod_1.z.number(),
})
    .strict();
exports.ResultatCreateManyInputObjectSchema = Schema;
