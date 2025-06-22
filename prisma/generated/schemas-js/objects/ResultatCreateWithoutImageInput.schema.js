"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateNestedManyWithoutResultatsInput_schema_1 = require("./ReponseCreateNestedManyWithoutResultatsInput.schema");
const UtilResultatCreateNestedManyWithoutResultatInput_schema_1 = require("./UtilResultatCreateNestedManyWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    titre: zod_1.z.string(),
    description: zod_1.z.string(),
    resultat_score_min: zod_1.z.number(),
    resultat_score_max: zod_1.z.number(),
    reponses: zod_1.z
        .lazy(() => ReponseCreateNestedManyWithoutResultatsInput_schema_1.ReponseCreateNestedManyWithoutResultatsInputObjectSchema)
        .optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatCreateNestedManyWithoutResultatInput_schema_1.UtilResultatCreateNestedManyWithoutResultatInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatCreateWithoutImageInputObjectSchema = Schema;
