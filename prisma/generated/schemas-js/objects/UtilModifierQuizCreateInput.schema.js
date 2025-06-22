"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateNestedOneWithoutQuizsModifierInput_schema_1 = require("./UtilisateurCreateNestedOneWithoutQuizsModifierInput.schema");
const QuizCreateNestedOneWithoutEditeursInput_schema_1 = require("./QuizCreateNestedOneWithoutEditeursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    utilisateur: zod_1.z.lazy(() => UtilisateurCreateNestedOneWithoutQuizsModifierInput_schema_1.UtilisateurCreateNestedOneWithoutQuizsModifierInputObjectSchema),
    quiz: zod_1.z.lazy(() => QuizCreateNestedOneWithoutEditeursInput_schema_1.QuizCreateNestedOneWithoutEditeursInputObjectSchema),
})
    .strict();
exports.UtilModifierQuizCreateInputObjectSchema = Schema;
