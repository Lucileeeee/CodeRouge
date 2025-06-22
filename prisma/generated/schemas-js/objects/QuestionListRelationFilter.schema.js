"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereInput_schema_1 = require("./QuestionWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema).optional(),
})
    .strict();
exports.QuestionListRelationFilterObjectSchema = Schema;
