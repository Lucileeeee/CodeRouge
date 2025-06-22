"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateOneRequiredWithoutEditeursNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutEditeursInput_schema_1 = require("./QuizCreateWithoutEditeursInput.schema");
const QuizUncheckedCreateWithoutEditeursInput_schema_1 = require("./QuizUncheckedCreateWithoutEditeursInput.schema");
const QuizCreateOrConnectWithoutEditeursInput_schema_1 = require("./QuizCreateOrConnectWithoutEditeursInput.schema");
const QuizUpsertWithoutEditeursInput_schema_1 = require("./QuizUpsertWithoutEditeursInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutEditeursInput_schema_1 = require("./QuizUpdateWithoutEditeursInput.schema");
const QuizUncheckedUpdateWithoutEditeursInput_schema_1 = require("./QuizUncheckedUpdateWithoutEditeursInput.schema");
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
    upsert: zod_1.z
        .lazy(() => QuizUpsertWithoutEditeursInput_schema_1.QuizUpsertWithoutEditeursInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpdateWithoutEditeursInput_schema_1.QuizUpdateWithoutEditeursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutEditeursInput_schema_1.QuizUncheckedUpdateWithoutEditeursInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.QuizUpdateOneRequiredWithoutEditeursNestedInputObjectSchema = Schema;
