"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
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
    resultat: zod_1.z
        .lazy(() => ResultatUpdateOneWithoutImageNestedInput_schema_1.ResultatUpdateOneWithoutImageNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUpdateWithoutQuestionInputObjectSchema = Schema;
