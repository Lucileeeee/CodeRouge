"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpsertWithoutEditeursInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizUpdateWithoutEditeursInput_schema_1 = require("./QuizUpdateWithoutEditeursInput.schema");
const QuizUncheckedUpdateWithoutEditeursInput_schema_1 = require("./QuizUncheckedUpdateWithoutEditeursInput.schema");
const QuizCreateWithoutEditeursInput_schema_1 = require("./QuizCreateWithoutEditeursInput.schema");
const QuizUncheckedCreateWithoutEditeursInput_schema_1 = require("./QuizUncheckedCreateWithoutEditeursInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutEditeursInput_schema_1.QuizUpdateWithoutEditeursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutEditeursInput_schema_1.QuizUncheckedUpdateWithoutEditeursInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutEditeursInput_schema_1.QuizCreateWithoutEditeursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutEditeursInput_schema_1.QuizUncheckedCreateWithoutEditeursInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpsertWithoutEditeursInputObjectSchema = Schema;
