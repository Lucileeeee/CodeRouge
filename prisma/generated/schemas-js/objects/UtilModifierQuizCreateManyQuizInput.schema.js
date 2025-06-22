"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateManyQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    utilisateurId: zod_1.z.number(),
    date: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.UtilModifierQuizCreateManyQuizInputObjectSchema = Schema;
