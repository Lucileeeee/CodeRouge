"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateManySchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateManyMutationInput_schema_1 = require("./objects/UtilisateurUpdateManyMutationInput.schema");
const UtilisateurWhereInput_schema_1 = require("./objects/UtilisateurWhereInput.schema");
exports.UtilisateurUpdateManySchema = zod_1.z.object({
    data: UtilisateurUpdateManyMutationInput_schema_1.UtilisateurUpdateManyMutationInputObjectSchema,
    where: UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema.optional(),
});
