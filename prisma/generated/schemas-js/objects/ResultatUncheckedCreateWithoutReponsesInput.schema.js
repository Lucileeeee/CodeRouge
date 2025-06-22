"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUncheckedCreateWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatUncheckedCreateNestedManyWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedCreateNestedManyWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    titre: zod_1.z.string(),
    description: zod_1.z.string(),
    resultat_score_min: zod_1.z.number(),
    resultat_score_max: zod_1.z.number(),
    imageId: zod_1.z.number(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatUncheckedCreateNestedManyWithoutResultatInput_schema_1.UtilResultatUncheckedCreateNestedManyWithoutResultatInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatUncheckedCreateWithoutReponsesInputObjectSchema = Schema;
