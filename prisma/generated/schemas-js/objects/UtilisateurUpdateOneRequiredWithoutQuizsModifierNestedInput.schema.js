"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsModifierInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsModifierInput.schema");
const UtilisateurUpsertWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUpsertWithoutQuizsModifierInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurUpdateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsModifierInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsModifierInput_schema_1.UtilisateurCreateWithoutQuizsModifierInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsModifierInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => UtilisateurCreateOrConnectWithoutQuizsModifierInput_schema_1.UtilisateurCreateOrConnectWithoutQuizsModifierInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => UtilisateurUpsertWithoutQuizsModifierInput_schema_1.UtilisateurUpsertWithoutQuizsModifierInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsModifierInput_schema_1.UtilisateurUpdateWithoutQuizsModifierInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsModifierInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsModifierInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInputObjectSchema = Schema;
