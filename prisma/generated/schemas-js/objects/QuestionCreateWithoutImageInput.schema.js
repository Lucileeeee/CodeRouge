"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateNestedManyWithoutQuestionsInput_schema_1 = require("./QuizCreateNestedManyWithoutQuestionsInput.schema");
const ReponseCreateNestedManyWithoutQuestionsInput_schema_1 = require("./ReponseCreateNestedManyWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    text: zod_1.z.string(),
    signalement: zod_1.z.number().optional(),
    disponible: zod_1.z.boolean(),
    quizs: zod_1.z
        .lazy(() => QuizCreateNestedManyWithoutQuestionsInput_schema_1.QuizCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseCreateNestedManyWithoutQuestionsInput_schema_1.ReponseCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionCreateWithoutImageInputObjectSchema = Schema;
