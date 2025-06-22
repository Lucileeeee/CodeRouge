"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutQuestionsInput_schema_1 = require("./QuizUpdateWithoutQuestionsInput.schema");
const QuizUncheckedUpdateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedUpdateWithoutQuestionsInput.schema");
const QuizCreateWithoutQuestionsInput_schema_1 = require("./QuizCreateWithoutQuestionsInput.schema");
const QuizUncheckedCreateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedCreateWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutQuestionsInput_schema_1.QuizUpdateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutQuestionsInput_schema_1.QuizUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutQuestionsInput_schema_1.QuizCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutQuestionsInput_schema_1.QuizUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema = Schema;
