"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpsertWithoutJoueursInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizUpdateWithoutJoueursInput_schema_1 = require("./QuizUpdateWithoutJoueursInput.schema");
const QuizUncheckedUpdateWithoutJoueursInput_schema_1 = require("./QuizUncheckedUpdateWithoutJoueursInput.schema");
const QuizCreateWithoutJoueursInput_schema_1 = require("./QuizCreateWithoutJoueursInput.schema");
const QuizUncheckedCreateWithoutJoueursInput_schema_1 = require("./QuizUncheckedCreateWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutJoueursInput_schema_1.QuizUpdateWithoutJoueursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutJoueursInput_schema_1.QuizUncheckedUpdateWithoutJoueursInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutJoueursInput_schema_1.QuizCreateWithoutJoueursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutJoueursInput_schema_1.QuizUncheckedCreateWithoutJoueursInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpsertWithoutJoueursInputObjectSchema = Schema;
