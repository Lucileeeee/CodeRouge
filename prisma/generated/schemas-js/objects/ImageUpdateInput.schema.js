"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const QuestionUpdateOneWithoutImageNestedInput_schema_1 = require("./QuestionUpdateOneWithoutImageNestedInput.schema");
const ResultatUpdateOneWithoutImageNestedInput_schema_1 = require("./ResultatUpdateOneWithoutImageNestedInput.schema");
const Schema = zod_1.z
    .object({
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
        .lazy(() => QuestionUpdateOneWithoutImageNestedInput_schema_1.QuestionUpdateOneWithoutImageNestedInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatUpdateOneWithoutImageNestedInput_schema_1.ResultatUpdateOneWithoutImageNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUpdateInputObjectSchema = Schema;
