"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const ReponseUpdateManyWithoutQuestionsNestedInput_schema_1 = require("./ReponseUpdateManyWithoutQuestionsNestedInput.schema");
const ImageUpdateOneWithoutQuestionNestedInput_schema_1 = require("./ImageUpdateOneWithoutQuestionNestedInput.schema");
const Schema = zod_1.z
    .object({
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
    reponses: zod_1.z
        .lazy(() => ReponseUpdateManyWithoutQuestionsNestedInput_schema_1.ReponseUpdateManyWithoutQuestionsNestedInputObjectSchema)
        .optional(),
    image: zod_1.z
        .lazy(() => ImageUpdateOneWithoutQuestionNestedInput_schema_1.ImageUpdateOneWithoutQuestionNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionUpdateWithoutQuizsInputObjectSchema = Schema;
