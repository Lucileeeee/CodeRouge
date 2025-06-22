"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurDeleteOneSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./objects/UtilisateurWhereUniqueInput.schema");
exports.UtilisateurDeleteOneSchema = zod_1.z.object({
    where: UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema,
});
