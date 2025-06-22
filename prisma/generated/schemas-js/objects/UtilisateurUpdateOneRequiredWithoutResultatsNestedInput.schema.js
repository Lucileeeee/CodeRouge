"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateOneRequiredWithoutResultatsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutResultatsInput_schema_1 = require("./UtilisateurCreateWithoutResultatsInput.schema");
const UtilisateurUncheckedCreateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutResultatsInput.schema");
const UtilisateurCreateOrConnectWithoutResultatsInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutResultatsInput.schema");
const UtilisateurUpsertWithoutResultatsInput_schema_1 = require("./UtilisateurUpsertWithoutResultatsInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurUpdateWithoutResultatsInput_schema_1 = require("./UtilisateurUpdateWithoutResultatsInput.schema");
const UtilisateurUncheckedUpdateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutResultatsInput_schema_1.UtilisateurCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutResultatsInput_schema_1.UtilisateurUncheckedCreateWithoutResultatsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => UtilisateurCreateOrConnectWithoutResultatsInput_schema_1.UtilisateurCreateOrConnectWithoutResultatsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => UtilisateurUpsertWithoutResultatsInput_schema_1.UtilisateurUpsertWithoutResultatsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutResultatsInput_schema_1.UtilisateurUpdateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutResultatsInput_schema_1.UtilisateurUncheckedUpdateWithoutResultatsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurUpdateOneRequiredWithoutResultatsNestedInputObjectSchema = Schema;
