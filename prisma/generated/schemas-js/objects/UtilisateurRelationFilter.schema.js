"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereInput_schema_1 = require("./UtilisateurWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.UtilisateurRelationFilterObjectSchema = Schema;
