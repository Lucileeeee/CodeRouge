"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateManyWithoutQuizsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutQuizsInput_schema_1 = require("./QuestionCreateWithoutQuizsInput.schema");
const QuestionUncheckedCreateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedCreateWithoutQuizsInput.schema");
const QuestionCreateOrConnectWithoutQuizsInput_schema_1 = require("./QuestionCreateOrConnectWithoutQuizsInput.schema");
const QuestionUpsertWithWhereUniqueWithoutQuizsInput_schema_1 = require("./QuestionUpsertWithWhereUniqueWithoutQuizsInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithWhereUniqueWithoutQuizsInput_schema_1 = require("./QuestionUpdateWithWhereUniqueWithoutQuizsInput.schema");
const QuestionUpdateManyWithWhereWithoutQuizsInput_schema_1 = require("./QuestionUpdateManyWithWhereWithoutQuizsInput.schema");
const QuestionScalarWhereInput_schema_1 = require("./QuestionScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateWithoutQuizsInput_schema_1.QuestionCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => QuestionCreateWithoutQuizsInput_schema_1.QuestionCreateWithoutQuizsInputObjectSchema).array(),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutQuizsInput_schema_1.QuestionUncheckedCreateWithoutQuizsInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUncheckedCreateWithoutQuizsInput_schema_1.QuestionUncheckedCreateWithoutQuizsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateOrConnectWithoutQuizsInput_schema_1.QuestionCreateOrConnectWithoutQuizsInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionCreateOrConnectWithoutQuizsInput_schema_1.QuestionCreateOrConnectWithoutQuizsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizsInput_schema_1.QuestionUpsertWithWhereUniqueWithoutQuizsInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizsInput_schema_1.QuestionUpsertWithWhereUniqueWithoutQuizsInputObjectSchema)
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
        zod_1.z.lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizsInput_schema_1.QuestionUpdateWithWhereUniqueWithoutQuizsInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizsInput_schema_1.QuestionUpdateWithWhereUniqueWithoutQuizsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpdateManyWithWhereWithoutQuizsInput_schema_1.QuestionUpdateManyWithWhereWithoutQuizsInputObjectSchema),
        zod_1.z
            .lazy(() => QuestionUpdateManyWithWhereWithoutQuizsInput_schema_1.QuestionUpdateManyWithWhereWithoutQuizsInputObjectSchema)
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
exports.QuestionUpdateManyWithoutQuizsNestedInputObjectSchema = Schema;
