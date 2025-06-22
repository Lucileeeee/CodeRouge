"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateManyUtilisateurInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateManyUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateManyUtilisateurInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizCreateManyUtilisateurInput_schema_1.UtilModifierQuizCreateManyUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizCreateManyUtilisateurInput_schema_1.UtilModifierQuizCreateManyUtilisateurInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilModifierQuizCreateManyUtilisateurInputEnvelopeObjectSchema = Schema;
