"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateWithoutUtilisateurInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateNestedOneWithoutEditeursInput_schema_1 = require("./QuizCreateNestedOneWithoutEditeursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    quiz: zod_1.z.lazy(() => QuizCreateNestedOneWithoutEditeursInput_schema_1.QuizCreateNestedOneWithoutEditeursInputObjectSchema),
})
    .strict();
exports.UtilModifierQuizCreateWithoutUtilisateurInputObjectSchema = Schema;
