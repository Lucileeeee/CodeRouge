"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateNestedManyWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutReponsesInput_schema_1 = require("./QuestionCreateWithoutReponsesInput.schema");
const QuestionUncheckedCreateWithoutReponsesInput_schema_1 = require("./QuestionUncheckedCreateWithoutReponsesInput.schema");
const QuestionCreateOrConnectWithoutReponsesInput_schema_1 = require("./QuestionCreateOrConnectWithoutReponsesInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
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
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.QuestionCreateNestedManyWithoutReponsesInputObjectSchema = Schema;
