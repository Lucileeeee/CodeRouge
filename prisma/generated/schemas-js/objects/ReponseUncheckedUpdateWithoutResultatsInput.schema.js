"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUncheckedUpdateWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const FloatFieldUpdateOperationsInput_schema_1 = require("./FloatFieldUpdateOperationsInput.schema");
const QuestionUncheckedUpdateManyWithoutReponsesNestedInput_schema_1 = require("./QuestionUncheckedUpdateManyWithoutReponsesNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    text_reponse: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    score_reponse: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => FloatFieldUpdateOperationsInput_schema_1.FloatFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionUncheckedUpdateManyWithoutReponsesNestedInput_schema_1.QuestionUncheckedUpdateManyWithoutReponsesNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseUncheckedUpdateWithoutResultatsInputObjectSchema = Schema;
