"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    text_reponse: zod_1.z.string(),
    score_reponse: zod_1.z.number(),
})
    .strict();
exports.ReponseCreateManyInputObjectSchema = Schema;
