"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateNestedOneWithoutQuizsPasserInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsPasserInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsPasserInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.UtilisateurCreateNestedOneWithoutQuizsPasserInputObjectSchema = Schema;
