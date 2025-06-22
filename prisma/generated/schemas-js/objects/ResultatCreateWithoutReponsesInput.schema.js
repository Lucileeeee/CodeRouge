"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateNestedOneWithoutResultatInput_schema_1 = require("./ImageCreateNestedOneWithoutResultatInput.schema");
const UtilResultatCreateNestedManyWithoutResultatInput_schema_1 = require("./UtilResultatCreateNestedManyWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    titre: zod_1.z.string(),
    description: zod_1.z.string(),
    resultat_score_min: zod_1.z.number(),
    resultat_score_max: zod_1.z.number(),
    image: zod_1.z
        .lazy(() => ImageCreateNestedOneWithoutResultatInput_schema_1.ImageCreateNestedOneWithoutResultatInputObjectSchema)
        .optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatCreateNestedManyWithoutResultatInput_schema_1.UtilResultatCreateNestedManyWithoutResultatInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatCreateWithoutReponsesInputObjectSchema = Schema;
