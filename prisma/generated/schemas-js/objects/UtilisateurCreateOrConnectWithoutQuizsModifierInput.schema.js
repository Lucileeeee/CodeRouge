"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateOrConnectWithoutQuizsModifierInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateWithoutQuizsModifierInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsModifierInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsModifierInput_schema_1.UtilisateurCreateWithoutQuizsModifierInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsModifierInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsModifierInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurCreateOrConnectWithoutQuizsModifierInputObjectSchema = Schema;
