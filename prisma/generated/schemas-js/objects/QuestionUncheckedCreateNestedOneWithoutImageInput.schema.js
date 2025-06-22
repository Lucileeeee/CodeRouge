"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUncheckedCreateNestedOneWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutImageInput_schema_1 = require("./QuestionCreateWithoutImageInput.schema");
const QuestionUncheckedCreateWithoutImageInput_schema_1 = require("./QuestionUncheckedCreateWithoutImageInput.schema");
const QuestionCreateOrConnectWithoutImageInput_schema_1 = require("./QuestionCreateOrConnectWithoutImageInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateWithoutImageInput_schema_1.QuestionCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutImageInput_schema_1.QuestionUncheckedCreateWithoutImageInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => QuestionCreateOrConnectWithoutImageInput_schema_1.QuestionCreateOrConnectWithoutImageInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.QuestionUncheckedCreateNestedOneWithoutImageInputObjectSchema = Schema;
