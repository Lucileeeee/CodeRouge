"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateNestedOneWithoutQuizsPasserInput_schema_1 = require("./UtilisateurCreateNestedOneWithoutQuizsPasserInput.schema");
const QuizCreateNestedOneWithoutJoueursInput_schema_1 = require("./QuizCreateNestedOneWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z.coerce.date().optional(),
    joueur: zod_1.z.lazy(() => UtilisateurCreateNestedOneWithoutQuizsPasserInput_schema_1.UtilisateurCreateNestedOneWithoutQuizsPasserInputObjectSchema),
    quiz: zod_1.z.lazy(() => QuizCreateNestedOneWithoutJoueursInput_schema_1.QuizCreateNestedOneWithoutJoueursInputObjectSchema),
})
    .strict();
exports.UtilPasserQuizCreateInputObjectSchema = Schema;
