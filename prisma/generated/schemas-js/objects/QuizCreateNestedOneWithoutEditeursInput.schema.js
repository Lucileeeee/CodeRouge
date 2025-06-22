"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateNestedOneWithoutEditeursInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutEditeursInput_schema_1 = require("./QuizCreateWithoutEditeursInput.schema");
const QuizUncheckedCreateWithoutEditeursInput_schema_1 = require("./QuizUncheckedCreateWithoutEditeursInput.schema");
const QuizCreateOrConnectWithoutEditeursInput_schema_1 = require("./QuizCreateOrConnectWithoutEditeursInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateWithoutEditeursInput_schema_1.QuizCreateWithoutEditeursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutEditeursInput_schema_1.QuizUncheckedCreateWithoutEditeursInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => QuizCreateOrConnectWithoutEditeursInput_schema_1.QuizCreateOrConnectWithoutEditeursInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.QuizCreateNestedOneWithoutEditeursInputObjectSchema = Schema;
