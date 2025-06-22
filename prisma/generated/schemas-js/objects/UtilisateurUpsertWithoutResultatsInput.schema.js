"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpsertWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateWithoutResultatsInput_schema_1 = require("./UtilisateurUpdateWithoutResultatsInput.schema");
const UtilisateurUncheckedUpdateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutResultatsInput.schema");
const UtilisateurCreateWithoutResultatsInput_schema_1 = require("./UtilisateurCreateWithoutResultatsInput.schema");
const UtilisateurUncheckedCreateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutResultatsInput_schema_1.UtilisateurUpdateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutResultatsInput_schema_1.UtilisateurUncheckedUpdateWithoutResultatsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutResultatsInput_schema_1.UtilisateurCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutResultatsInput_schema_1.UtilisateurUncheckedCreateWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurUpsertWithoutResultatsInputObjectSchema = Schema;
