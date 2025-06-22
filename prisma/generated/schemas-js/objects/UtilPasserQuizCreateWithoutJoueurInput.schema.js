"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateNestedOneWithoutJoueursInput_schema_1 = require("./QuizCreateNestedOneWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    quiz: zod_1.z.lazy(() => QuizCreateNestedOneWithoutJoueursInput_schema_1.QuizCreateNestedOneWithoutJoueursInputObjectSchema),
})
    .strict();
exports.UtilPasserQuizCreateWithoutJoueurInputObjectSchema = Schema;
