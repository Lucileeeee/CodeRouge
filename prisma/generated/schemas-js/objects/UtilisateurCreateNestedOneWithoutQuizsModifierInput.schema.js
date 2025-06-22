"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateNestedOneWithoutQuizsModifierInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsModifierInput.schema");
const UtilisateurCreateOrConnectWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateOrConnectWithoutQuizsModifierInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.UtilisateurCreateNestedOneWithoutQuizsModifierInputObjectSchema = Schema;
