"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereInput_schema_1 = require("./UtilModifierQuizWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema).optional(),
})
    .strict();
exports.UtilModifierQuizListRelationFilterObjectSchema = Schema;
