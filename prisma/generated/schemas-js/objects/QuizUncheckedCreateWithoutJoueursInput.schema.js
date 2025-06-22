"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUncheckedCreateWithoutJoueursInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizUncheckedCreateNestedManyWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedCreateNestedManyWithoutQuizInput.schema");
const QuestionUncheckedCreateNestedManyWithoutQuizsInput_schema_1 = require("./QuestionUncheckedCreateNestedManyWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    createdAt: zod_1.z.coerce.date().optional(),
    titre: zod_1.z.string(),
    disponible: zod_1.z.boolean().optional(),
    autheurId: zod_1.z.number(),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizUncheckedCreateNestedManyWithoutQuizInput_schema_1.UtilModifierQuizUncheckedCreateNestedManyWithoutQuizInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionUncheckedCreateNestedManyWithoutQuizsInput_schema_1.QuestionUncheckedCreateNestedManyWithoutQuizsInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuizUncheckedCreateWithoutJoueursInputObjectSchema = Schema;
