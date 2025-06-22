"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereInput_schema_1 = require("./ReponseWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema).optional(),
})
    .strict();
exports.ReponseListRelationFilterObjectSchema = Schema;
