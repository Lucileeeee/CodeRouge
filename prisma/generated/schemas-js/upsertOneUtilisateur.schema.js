"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpsertSchema = void 0;
const zod_1 = require("zod");
const UtilisateurWhereUniqueInput_schema_1 = require("./objects/UtilisateurWhereUniqueInput.schema");
const UtilisateurCreateInput_schema_1 = require("./objects/UtilisateurCreateInput.schema");
const UtilisateurUncheckedCreateInput_schema_1 = require("./objects/UtilisateurUncheckedCreateInput.schema");
const UtilisateurUpdateInput_schema_1 = require("./objects/UtilisateurUpdateInput.schema");
const UtilisateurUncheckedUpdateInput_schema_1 = require("./objects/UtilisateurUncheckedUpdateInput.schema");
exports.UtilisateurUpsertSchema = zod_1.z.object({
    where: UtilisateurWhereUniqueInput_schema_1.UtilisateurWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        UtilisateurCreateInput_schema_1.UtilisateurCreateInputObjectSchema,
        UtilisateurUncheckedCreateInput_schema_1.UtilisateurUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        UtilisateurUpdateInput_schema_1.UtilisateurUpdateInputObjectSchema,
        UtilisateurUncheckedUpdateInput_schema_1.UtilisateurUncheckedUpdateInputObjectSchema,
    ]),
});
