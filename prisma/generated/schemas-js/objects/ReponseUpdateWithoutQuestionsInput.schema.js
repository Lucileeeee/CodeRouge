"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const FloatFieldUpdateOperationsInput_schema_1 = require("./FloatFieldUpdateOperationsInput.schema");
const ResultatUpdateManyWithoutReponsesNestedInput_schema_1 = require("./ResultatUpdateManyWithoutReponsesNestedInput.schema");
const Schema = zod_1.z
    .object({
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
    resultats: zod_1.z
        .lazy(() => ResultatUpdateManyWithoutReponsesNestedInput_schema_1.ResultatUpdateManyWithoutReponsesNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseUpdateWithoutQuestionsInputObjectSchema = Schema;
