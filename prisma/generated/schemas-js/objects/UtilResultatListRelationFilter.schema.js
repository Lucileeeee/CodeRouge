"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereInput_schema_1 = require("./UtilResultatWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema).optional(),
})
    .strict();
exports.UtilResultatListRelationFilterObjectSchema = Schema;
