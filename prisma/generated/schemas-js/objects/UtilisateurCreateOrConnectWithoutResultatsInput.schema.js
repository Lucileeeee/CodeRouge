"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateOrConnectWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurCreateWithoutResultatsInput_schema_1 = require("./UtilisateurCreateWithoutResultatsInput.schema");
const UtilisateurUncheckedCreateWithoutResultatsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutResultatsInput_schema_1.UtilisateurCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutResultatsInput_schema_1.UtilisateurUncheckedCreateWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurCreateOrConnectWithoutResultatsInputObjectSchema = Schema;
