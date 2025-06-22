"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpsertWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateWithoutQuizsInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsInput.schema");
const UtilisateurCreateWithoutQuizsInput_schema_1 = require("./UtilisateurCreateWithoutQuizsInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsInput_schema_1.UtilisateurUpdateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsInput_schema_1.UtilisateurCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurUpsertWithoutQuizsInputObjectSchema = Schema;
