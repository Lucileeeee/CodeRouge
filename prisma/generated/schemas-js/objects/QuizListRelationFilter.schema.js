"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereInput_schema_1 = require("./QuizWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema).optional(),
})
    .strict();
exports.QuizListRelationFilterObjectSchema = Schema;
