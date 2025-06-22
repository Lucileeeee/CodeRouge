"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateNestedOneWithoutResultatsInput_schema_1 = require("./UtilisateurCreateNestedOneWithoutResultatsInput.schema");
const ResultatCreateNestedOneWithoutUtilisateursInput_schema_1 = require("./ResultatCreateNestedOneWithoutUtilisateursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    joueur: zod_1.z.lazy(() => UtilisateurCreateNestedOneWithoutResultatsInput_schema_1.UtilisateurCreateNestedOneWithoutResultatsInputObjectSchema),
    resultat: zod_1.z.lazy(() => ResultatCreateNestedOneWithoutUtilisateursInput_schema_1.ResultatCreateNestedOneWithoutUtilisateursInputObjectSchema),
})
    .strict();
exports.UtilResultatCreateInputObjectSchema = Schema;
