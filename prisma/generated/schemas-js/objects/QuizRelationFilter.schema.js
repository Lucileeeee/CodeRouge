"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereInput_schema_1 = require("./QuizWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => QuizWhereInput_schema_1.QuizWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.QuizRelationFilterObjectSchema = Schema;
