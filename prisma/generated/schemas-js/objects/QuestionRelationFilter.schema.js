"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereInput_schema_1 = require("./QuestionWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.QuestionRelationFilterObjectSchema = Schema;
