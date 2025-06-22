"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateNestedOneWithoutImageInput_schema_1 = require("./QuestionCreateNestedOneWithoutImageInput.schema");
const ResultatCreateNestedOneWithoutImageInput_schema_1 = require("./ResultatCreateNestedOneWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    url: zod_1.z.string(),
    prompt: zod_1.z.string(),
    question: zod_1.z
        .lazy(() => QuestionCreateNestedOneWithoutImageInput_schema_1.QuestionCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatCreateNestedOneWithoutImageInput_schema_1.ResultatCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageCreateInputObjectSchema = Schema;
