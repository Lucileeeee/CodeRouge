"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurDeleteManySchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereInput_schema_1 = require("./objects/UtilisateurWhereInput.schema");
exports.UtilisateurDeleteManySchema = zod_1.z.object({
    where: UtilisateurWhereInput_schema_1.UtilisateurWhereInputObjectSchema.optional(),
});
