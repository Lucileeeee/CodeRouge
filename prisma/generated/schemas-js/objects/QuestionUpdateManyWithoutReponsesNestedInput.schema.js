"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateManyWithoutReponsesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutReponsesInput_schema_1 = require("./QuestionCreateWithoutReponsesInput.schema");
const QuestionUncheckedCreateWithoutReponsesInput_schema_1 = require("./QuestionUncheckedCreateWithoutReponsesInput.schema");
const QuestionCreateOrConnectWithoutReponsesInput_schema_1 = require("./QuestionCreateOrConnectWithoutReponsesInput.schema");
const QuestionUpsertWithWhereUniqueWithoutReponsesInput_schema_1 = require("./QuestionUpsertWithWhereUniqueWithoutReponsesInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithWhereUniqueWithoutReponsesInput_schema_1 = require("./QuestionUpdateWithWhereUniqueWithoutReponsesInput.schema");
const QuestionUpdateManyWithWhereWithoutReponsesInput_schema_1 = require("./QuestionUpdateManyWithWhereWithoutReponsesInput.schema");
const QuestionScalarWhereInput_schema_1 = require("./QuestionScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateWithoutReponsesInput_schema_1.QuestionCreateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => QuestionCreateWithoutReponsesInput_schema_1.QuestionCreateWithoutReponsesInputObjectSchema).array(),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutReponsesInput_schema_1.QuestionUncheckedCreateWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUncheckedCreateWithoutReponsesInput_schema_1.QuestionUncheckedCreateWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateOrConnectWithoutReponsesInput_schema_1.QuestionCreateOrConnectWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionCreateOrConnectWithoutReponsesInput_schema_1.QuestionCreateOrConnectWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpsertWithWhereUniqueWithoutReponsesInput_schema_1.QuestionUpsertWithWhereUniqueWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpsertWithWhereUniqueWithoutReponsesInput_schema_1.QuestionUpsertWithWhereUniqueWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpdateWithWhereUniqueWithoutReponsesInput_schema_1.QuestionUpdateWithWhereUniqueWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpdateWithWhereUniqueWithoutReponsesInput_schema_1.QuestionUpdateWithWhereUniqueWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpdateManyWithWhereWithoutReponsesInput_schema_1.QuestionUpdateManyWithWhereWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpdateManyWithWhereWithoutReponsesInput_schema_1.QuestionUpdateManyWithWhereWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionScalarWhereInput_schema_1.QuestionScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => QuestionScalarWhereInput_schema_1.QuestionScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuestionUpdateManyWithoutReponsesNestedInputObjectSchema = Schema;
