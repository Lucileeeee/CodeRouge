"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateNestedOneWithoutImageInput_schema_1 = require("./QuestionCreateNestedOneWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    url: zod_1.z.string(),
    prompt: zod_1.z.string(),
    question: zod_1.z
        .lazy(() => QuestionCreateNestedOneWithoutImageInput_schema_1.QuestionCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageCreateWithoutResultatInputObjectSchema = Schema;
