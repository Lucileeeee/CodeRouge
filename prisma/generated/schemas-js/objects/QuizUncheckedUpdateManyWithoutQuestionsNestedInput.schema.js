"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUncheckedUpdateManyWithoutQuestionsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutQuestionsInput_schema_1 = require("./QuizCreateWithoutQuestionsInput.schema");
const QuizUncheckedCreateWithoutQuestionsInput_schema_1 = require("./QuizUncheckedCreateWithoutQuestionsInput.schema");
const QuizCreateOrConnectWithoutQuestionsInput_schema_1 = require("./QuizCreateOrConnectWithoutQuestionsInput.schema");
const QuizUpsertWithWhereUniqueWithoutQuestionsInput_schema_1 = require("./QuizUpsertWithWhereUniqueWithoutQuestionsInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithWhereUniqueWithoutQuestionsInput_schema_1 = require("./QuizUpdateWithWhereUniqueWithoutQuestionsInput.schema");
const QuizUpdateManyWithWhereWithoutQuestionsInput_schema_1 = require("./QuizUpdateManyWithWhereWithoutQuestionsInput.schema");
const QuizScalarWhereInput_schema_1 = require("./QuizScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpsertWithWhereUniqueWithoutQuestionsInput_schema_1.QuizUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpsertWithWhereUniqueWithoutQuestionsInput_schema_1.QuizUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpdateWithWhereUniqueWithoutQuestionsInput_schema_1.QuizUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpdateWithWhereUniqueWithoutQuestionsInput_schema_1.QuizUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpdateManyWithWhereWithoutQuestionsInput_schema_1.QuizUpdateManyWithWhereWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpdateManyWithWhereWithoutQuestionsInput_schema_1.QuizUpdateManyWithWhereWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizScalarWhereInput_schema_1.QuizScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => QuizScalarWhereInput_schema_1.QuizScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuizUncheckedUpdateManyWithoutQuestionsNestedInputObjectSchema = Schema;
