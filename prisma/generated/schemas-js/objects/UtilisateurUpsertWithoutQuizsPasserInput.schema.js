"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpsertWithoutQuizsPasserInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsPasserInput.schema");
const UtilisateurCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsPasserInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsPasserInput_schema_1.UtilisateurUpdateWithoutQuizsPasserInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsPasserInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsPasserInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsPasserInput_schema_1.UtilisateurCreateWithoutQuizsPasserInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsPasserInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurUpsertWithoutQuizsPasserInputObjectSchema = Schema;
