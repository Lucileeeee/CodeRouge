"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedUpdateWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const QuestionUncheckedUpdateOneWithoutImageNestedInput_schema_1 = require("./QuestionUncheckedUpdateOneWithoutImageNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    url: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    prompt: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    question: zod_1.z
        .lazy(() => QuestionUncheckedUpdateOneWithoutImageNestedInput_schema_1.QuestionUncheckedUpdateOneWithoutImageNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUncheckedUpdateWithoutResultatInputObjectSchema = Schema;
