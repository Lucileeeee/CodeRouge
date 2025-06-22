"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateNestedOneWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutResultatsInput_schema_1 = require("./UtilisateurCreateWithoutResultatsInput.schema");
const UtilisateurUncheckedCreateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutResultatsInput.schema");
const UtilisateurCreateOrConnectWithoutResultatsInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutResultatsInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.UtilisateurCreateNestedOneWithoutResultatsInputObjectSchema = Schema;
