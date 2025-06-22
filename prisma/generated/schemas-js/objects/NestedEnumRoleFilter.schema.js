"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilterObjectSchema = void 0;
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(),
    in: zod_1.z
        .union([zod_1.z.lazy(() => Role_schema_1.RoleSchema).array(), zod_1.z.lazy(() => Role_schema_1.RoleSchema)])
        .optional(),
    notIn: zod_1.z
        .union([zod_1.z.lazy(() => Role_schema_1.RoleSchema).array(), zod_1.z.lazy(() => Role_schema_1.RoleSchema)])
        .optional(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => exports.NestedEnumRoleFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.NestedEnumRoleFilterObjectSchema = Schema;
