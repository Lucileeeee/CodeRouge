"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUncheckedCreateWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizUncheckedCreateNestedManyWithoutQuestionsInput_schema_1 = require("./QuizUncheckedCreateNestedManyWithoutQuestionsInput.schema");
const ReponseUncheckedCreateNestedManyWithoutQuestionsInput_schema_1 = require("./ReponseUncheckedCreateNestedManyWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    text: zod_1.z.string(),
    signalement: zod_1.z.number().optional(),
    disponible: zod_1.z.boolean(),
    quizs: zod_1.z
        .lazy(() => QuizUncheckedCreateNestedManyWithoutQuestionsInput_schema_1.QuizUncheckedCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseUncheckedCreateNestedManyWithoutQuestionsInput_schema_1.ReponseUncheckedCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionUncheckedCreateWithoutImageInputObjectSchema = Schema;
