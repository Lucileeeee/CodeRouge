"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateWithoutUtilisateursInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateNestedOneWithoutResultatInput_schema_1 = require("./ImageCreateNestedOneWithoutResultatInput.schema");
const ReponseCreateNestedManyWithoutResultatsInput_schema_1 = require("./ReponseCreateNestedManyWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    titre: zod_1.z.string(),
    description: zod_1.z.string(),
    resultat_score_min: zod_1.z.number(),
    resultat_score_max: zod_1.z.number(),
    image: zod_1.z
        .lazy(() => ImageCreateNestedOneWithoutResultatInput_schema_1.ImageCreateNestedOneWithoutResultatInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseCreateNestedManyWithoutResultatsInput_schema_1.ReponseCreateNestedManyWithoutResultatsInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatCreateWithoutUtilisateursInputObjectSchema = Schema;
