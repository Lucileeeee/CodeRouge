"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateNestedOneWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateNestedOneWithoutQuizsPasserInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    joueur: zod_1.z.lazy(() => UtilisateurCreateNestedOneWithoutQuizsPasserInput_schema_1.UtilisateurCreateNestedOneWithoutQuizsPasserInputObjectSchema),
})
    .strict();
exports.UtilPasserQuizCreateWithoutQuizInputObjectSchema = Schema;
