"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUncheckedUpdateWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const QuizUncheckedUpdateManyWithoutQuestionsNestedInput_schema_1 = require("./QuizUncheckedUpdateManyWithoutQuestionsNestedInput.schema");
const ReponseUncheckedUpdateManyWithoutQuestionsNestedInput_schema_1 = require("./ReponseUncheckedUpdateManyWithoutQuestionsNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    text: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    signalement: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    disponible: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    quizs: zod_1.z
        .lazy(() => QuizUncheckedUpdateManyWithoutQuestionsNestedInput_schema_1.QuizUncheckedUpdateManyWithoutQuestionsNestedInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseUncheckedUpdateManyWithoutQuestionsNestedInput_schema_1.ReponseUncheckedUpdateManyWithoutQuestionsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionUncheckedUpdateWithoutImageInputObjectSchema = Schema;
