"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUpdateManyMutationInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const Role_schema_1 = require("../enums/Role.schema");
const EnumRoleFieldUpdateOperationsInput_schema_1 = require("./EnumRoleFieldUpdateOperationsInput.schema");
const Schema = zod_1.z
    .object({
    email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    nom: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    prenom: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    mdp: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    role: zod_1.z
        .union([
        zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => EnumRoleFieldUpdateOperationsInput_schema_1.EnumRoleFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UtilisateurUpdateManyMutationInputObjectSchema = Schema;
