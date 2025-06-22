"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateOrConnectWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurCreateWithoutQuizsInput_schema_1 = require("./UtilisateurCreateWithoutQuizsInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsInput_schema_1.UtilisateurCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurCreateOrConnectWithoutQuizsInputObjectSchema = Schema;
