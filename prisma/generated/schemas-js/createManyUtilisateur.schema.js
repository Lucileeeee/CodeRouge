"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateManySchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateManyInput_schema_1 = require("./objects/UtilisateurCreateManyInput.schema");
exports.UtilisateurCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilisateurCreateManyInput_schema_1.UtilisateurCreateManyInputObjectSchema,
        zod_1.z.array(UtilisateurCreateManyInput_schema_1.UtilisateurCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
