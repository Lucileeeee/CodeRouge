"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUncheckedCreateNestedManyWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutQuestionsInput_schema_1 = require("./QuizCreateWithoutQuestionsInput.schema");
const QuizUncheckedCreateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedCreateWithoutQuestionsInput.schema");
const QuizCreateOrConnectWithoutQuestionsInput_schema_1 = require("./QuizCreateOrConnectWithoutQuestionsInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateWithoutQuestionsInput_schema_1.QuizCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => QuizCreateWithoutQuestionsInput_schema_1.QuizCreateWithoutQuestionsInputObjectSchema).array(),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutQuestionsInput_schema_1.QuizUncheckedCreateWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUncheckedCreateWithoutQuestionsInput_schema_1.QuizUncheckedCreateWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateOrConnectWithoutQuestionsInput_schema_1.QuizCreateOrConnectWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => QuizCreateOrConnectWithoutQuestionsInput_schema_1.QuizCreateOrConnectWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuizUncheckedCreateNestedManyWithoutQuestionsInputObjectSchema = Schema;
