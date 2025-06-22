"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUncheckedUpdateManyWithoutAutheurNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutAutheurInput_schema_1 = require("./QuizCreateWithoutAutheurInput.schema");
const QuizUncheckedCreateWithoutAutheurInput_schema_1 = require("./QuizUncheckedCreateWithoutAutheurInput.schema");
const QuizCreateOrConnectWithoutAutheurInput_schema_1 = require("./QuizCreateOrConnectWithoutAutheurInput.schema");
const QuizUpsertWithWhereUniqueWithoutAutheurInput_schema_1 = require("./QuizUpsertWithWhereUniqueWithoutAutheurInput.schema");
const QuizCreateManyAutheurInputEnvelope_schema_1 = require("./QuizCreateManyAutheurInputEnvelope.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithWhereUniqueWithoutAutheurInput_schema_1 = require("./QuizUpdateWithWhereUniqueWithoutAutheurInput.schema");
const QuizUpdateManyWithWhereWithoutAutheurInput_schema_1 = require("./QuizUpdateManyWithWhereWithoutAutheurInput.schema");
const QuizScalarWhereInput_schema_1 = require("./QuizScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateWithoutAutheurInput_schema_1.QuizCreateWithoutAutheurInputObjectSchema),
        zod_1.z.lazy(() => QuizCreateWithoutAutheurInput_schema_1.QuizCreateWithoutAutheurInputObjectSchema).array(),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutAutheurInput_schema_1.QuizUncheckedCreateWithoutAutheurInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUncheckedCreateWithoutAutheurInput_schema_1.QuizUncheckedCreateWithoutAutheurInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateOrConnectWithoutAutheurInput_schema_1.QuizCreateOrConnectWithoutAutheurInputObjectSchema),
        zod_1.z
            .lazy(() => QuizCreateOrConnectWithoutAutheurInput_schema_1.QuizCreateOrConnectWithoutAutheurInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpsertWithWhereUniqueWithoutAutheurInput_schema_1.QuizUpsertWithWhereUniqueWithoutAutheurInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpsertWithWhereUniqueWithoutAutheurInput_schema_1.QuizUpsertWithWhereUniqueWithoutAutheurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => QuizCreateManyAutheurInputEnvelope_schema_1.QuizCreateManyAutheurInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => QuizUpdateWithWhereUniqueWithoutAutheurInput_schema_1.QuizUpdateWithWhereUniqueWithoutAutheurInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpdateWithWhereUniqueWithoutAutheurInput_schema_1.QuizUpdateWithWhereUniqueWithoutAutheurInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpdateManyWithWhereWithoutAutheurInput_schema_1.QuizUpdateManyWithWhereWithoutAutheurInputObjectSchema),
        zod_1.z
            .lazy(() => QuizUpdateManyWithWhereWithoutAutheurInput_schema_1.QuizUpdateManyWithWhereWithoutAutheurInputObjectSchema)
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
exports.QuizUncheckedUpdateManyWithoutAutheurNestedInputObjectSchema = Schema;
