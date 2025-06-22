"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUncheckedCreateNestedManyWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutQuizsInput_schema_1 = require("./QuestionCreateWithoutQuizsInput.schema");
const QuestionUncheckedCreateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedCreateWithoutQuizsInput.schema");
const QuestionCreateOrConnectWithoutQuizsInput_schema_1 = require("./QuestionCreateOrConnectWithoutQuizsInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
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
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuestionUncheckedCreateNestedManyWithoutQuizsInputObjectSchema = Schema;
