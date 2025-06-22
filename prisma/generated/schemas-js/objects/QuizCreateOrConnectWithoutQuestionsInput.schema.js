"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateOrConnectWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizCreateWithoutQuestionsInput_schema_1 = require("./QuizCreateWithoutQuestionsInput.schema");
const QuizUncheckedCreateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedCreateWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutQuestionsInput_schema_1.QuizCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutQuestionsInput_schema_1.QuizUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.QuizCreateOrConnectWithoutQuestionsInputObjectSchema = Schema;
