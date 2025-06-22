"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutQuestionsInput_schema_1 = require("./QuizUpdateWithoutQuestionsInput.schema");
const QuizUncheckedUpdateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedUpdateWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutQuestionsInput_schema_1.QuizUpdateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutQuestionsInput_schema_1.QuizUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema = Schema;
