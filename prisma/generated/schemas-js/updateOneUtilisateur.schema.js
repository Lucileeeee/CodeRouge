"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateOneSchema = void 0;
const zod_1 = require("zod");
const UtilisateurUpdateInput_schema_1 = require("./objects/UtilisateurUpdateInput.schema");
const UtilisateurUncheckedUpdateInput_schema_1 = require("./objects/UtilisateurUncheckedUpdateInput.schema");
const UtilisateurWhereUniqueInput_schema_1 = require("./objects/UtilisateurWhereUniqueInput.schema");
exports.UtilisateurUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilisateurUpdateInput_schema_1.UtilisateurUpdateInputObjectSchema,
        UtilisateurUncheckedUpdateInput_schema_1.UtilisateurUncheckedUpdateInputObjectSchema,
    ]),
    where: UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema,
});
