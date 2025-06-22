"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsPasserInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsPasserInput.schema");
const UtilisateurUpsertWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUpsertWithoutQuizsPasserInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurUpdateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUpdateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedUpdateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedUpdateWithoutQuizsPasserInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsPasserInput_schema_1.UtilisateurCreateWithoutQuizsPasserInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsPasserInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => UtilisateurCreateOrConnectWithoutQuizsPasserInput_schema_1.UtilisateurCreateOrConnectWithoutQuizsPasserInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => UtilisateurUpsertWithoutQuizsPasserInput_schema_1.UtilisateurUpsertWithoutQuizsPasserInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilisateurUpdateWithoutQuizsPasserInput_schema_1.UtilisateurUpdateWithoutQuizsPasserInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedUpdateWithoutQuizsPasserInput_schema_1.UtilisateurUncheckedUpdateWithoutQuizsPasserInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInputObjectSchema = Schema;
