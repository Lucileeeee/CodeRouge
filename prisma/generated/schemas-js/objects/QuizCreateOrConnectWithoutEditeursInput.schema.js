"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateOrConnectWithoutEditeursInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizCreateWithoutEditeursInput_schema_1 = require("./QuizCreateWithoutEditeursInput.schema");
const QuizUncheckedCreateWithoutEditeursInput_schema_1 = require("./QuizUncheckedCreateWithoutEditeursInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutEditeursInput_schema_1.QuizCreateWithoutEditeursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutEditeursInput_schema_1.QuizUncheckedCreateWithoutEditeursInputObjectSchema),
    ]),
})
    .strict();
exports.QuizCreateOrConnectWithoutEditeursInputObjectSchema = Schema;
