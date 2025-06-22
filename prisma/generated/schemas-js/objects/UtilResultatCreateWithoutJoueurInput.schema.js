"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateNestedOneWithoutUtilisateursInput_schema_1 = require("./ResultatCreateNestedOneWithoutUtilisateursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    resultat: zod_1.z.lazy(() => ResultatCreateNestedOneWithoutUtilisateursInput_schema_1.ResultatCreateNestedOneWithoutUtilisateursInputObjectSchema),
})
    .strict();
exports.UtilResultatCreateWithoutJoueurInputObjectSchema = Schema;
