"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUncheckedCreateNestedManyWithoutAutheurInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutAutheurInput_schema_1 = require("./QuizCreateWithoutAutheurInput.schema");
const QuizUncheckedCreateWithoutAutheurInput_schema_1 = require("./QuizUncheckedCreateWithoutAutheurInput.schema");
const QuizCreateOrConnectWithoutAutheurInput_schema_1 = require("./QuizCreateOrConnectWithoutAutheurInput.schema");
const QuizCreateManyAutheurInputEnvelope_schema_1 = require("./QuizCreateManyAutheurInputEnvelope.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => QuizCreateManyAutheurInputEnvelope_schema_1.QuizCreateManyAutheurInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuizUncheckedCreateNestedManyWithoutAutheurInputObjectSchema = Schema;
