"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateWithoutAutheurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateNestedManyWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateNestedManyWithoutQuizInput.schema");
const UtilPasserQuizCreateNestedManyWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateNestedManyWithoutQuizInput.schema");
const QuestionCreateNestedManyWithoutQuizsInput_schema_1 = require("./QuestionCreateNestedManyWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    createdAt: zod_1.z.coerce.date().optional(),
    titre: zod_1.z.string(),
    disponible: zod_1.z.boolean().optional(),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizCreateNestedManyWithoutQuizInput_schema_1.UtilModifierQuizCreateNestedManyWithoutQuizInputObjectSchema)
        .optional(),
    joueurs: zod_1.z
        .lazy(() => UtilPasserQuizCreateNestedManyWithoutQuizInput_schema_1.UtilPasserQuizCreateNestedManyWithoutQuizInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionCreateNestedManyWithoutQuizsInput_schema_1.QuestionCreateNestedManyWithoutQuizsInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuizCreateWithoutAutheurInputObjectSchema = Schema;
