"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpsertWithoutQuizsModifierInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsModifierInput.schema");
const UtilisateurCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsModifierInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsModifierInput_schema_1.UtilisateurUpdateWithoutQuizsModifierInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsModifierInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsModifierInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsModifierInput_schema_1.UtilisateurCreateWithoutQuizsModifierInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsModifierInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurUpsertWithoutQuizsModifierInputObjectSchema = Schema;
