"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateOneRequiredWithoutJoueursNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateWithoutJoueursInput_schema_1 = require("./QuizCreateWithoutJoueursInput.schema");
const QuizUncheckedCreateWithoutJoueursInput_schema_1 = require("./QuizUncheckedCreateWithoutJoueursInput.schema");
const QuizCreateOrConnectWithoutJoueursInput_schema_1 = require("./QuizCreateOrConnectWithoutJoueursInput.schema");
const QuizUpsertWithoutJoueursInput_schema_1 = require("./QuizUpsertWithoutJoueursInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutJoueursInput_schema_1 = require("./QuizUpdateWithoutJoueursInput.schema");
const QuizUncheckedUpdateWithoutJoueursInput_schema_1 = require("./QuizUncheckedUpdateWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizCreateWithoutJoueursInput_schema_1.QuizCreateWithoutJoueursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutJoueursInput_schema_1.QuizUncheckedCreateWithoutJoueursInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => QuizCreateOrConnectWithoutJoueursInput_schema_1.QuizCreateOrConnectWithoutJoueursInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => QuizUpsertWithoutJoueursInput_schema_1.QuizUpsertWithoutJoueursInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => QuizUpdateWithoutJoueursInput_schema_1.QuizUpdateWithoutJoueursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutJoueursInput_schema_1.QuizUncheckedUpdateWithoutJoueursInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.QuizUpdateOneRequiredWithoutJoueursNestedInputObjectSchema = Schema;
