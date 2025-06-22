"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateNestedOneWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsInput_schema_1 = require("./UtilisateurCreateWithoutQuizsInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.UtilisateurCreateNestedOneWithoutQuizsInputObjectSchema = Schema;
