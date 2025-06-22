"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateNestedManyWithoutQuestionsInput_schema_1 = require("./QuizCreateNestedManyWithoutQuestionsInput.schema");
const ImageCreateNestedOneWithoutQuestionInput_schema_1 = require("./ImageCreateNestedOneWithoutQuestionInput.schema");
const Schema = zod_1.z
    .object({
    text: zod_1.z.string(),
    signalement: zod_1.z.number().optional(),
    disponible: zod_1.z.boolean(),
    quizs: zod_1.z
        .lazy(() => QuizCreateNestedManyWithoutQuestionsInput_schema_1.QuizCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
    image: zod_1.z
        .lazy(() => ImageCreateNestedOneWithoutQuestionInput_schema_1.ImageCreateNestedOneWithoutQuestionInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionCreateWithoutReponsesInputObjectSchema = Schema;
