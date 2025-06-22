"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateOneRequiredWithoutQuizsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsInput_schema_1 = require("./UtilisateurCreateWithoutQuizsInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsInput.schema");
const UtilisateurUpsertWithoutQuizsInput_schema_1 = require("./UtilisateurUpsertWithoutQuizsInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurUpdateWithoutQuizsInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsInput_schema_1.UtilisateurCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => UtilisateurCreateOrConnectWithoutQuizsInput_schema_1.UtilisateurCreateOrConnectWithoutQuizsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => UtilisateurUpsertWithoutQuizsInput_schema_1.UtilisateurUpsertWithoutQuizsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsInput_schema_1.UtilisateurUpdateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurUpdateOneRequiredWithoutQuizsNestedInputObjectSchema = Schema;
