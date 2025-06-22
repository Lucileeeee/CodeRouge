"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(),
})
    .strict();
exports.EnumRoleFieldUpdateOperationsInputObjectSchema = Schema;
