"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateOrConnectWithoutQuizsPasserInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./UtilisateurWhereUniqueInput.schema");
const UtilisateurCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateWithoutQuizsPasserInput.schema");
const UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1 = require("./UtilisateurUncheckedCreateWithoutQuizsPasserInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilisateurCreateWithoutQuizsPasserInput_schema_1.UtilisateurCreateWithoutQuizsPasserInputObjectSchema),
        zod_1.z.lazy(() => UtilisateurUncheckedCreateWithoutQuizsPasserInput_schema_1.UtilisateurUncheckedCreateWithoutQuizsPasserInputObjectSchema),
    ]),
})
    .strict();
exports.UtilisateurCreateOrConnectWithoutQuizsPasserInputObjectSchema = Schema;
