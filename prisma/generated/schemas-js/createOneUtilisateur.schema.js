"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateOneSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateInput_schema_1 = require("./objects/UtilisateurCreateInput.schema");
const UtilisateurUncheckedCreateInput_schema_1 = require("./objects/UtilisateurUncheckedCreateInput.schema");
exports.UtilisateurCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilisateurCreateInput_schema_1.UtilisateurCreateInputObjectSchema,
        UtilisateurUncheckedCreateInput_schema_1.UtilisateurUncheckedCreateInputObjectSchema,
    ]),
});
