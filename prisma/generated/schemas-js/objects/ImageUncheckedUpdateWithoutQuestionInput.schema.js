"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedUpdateWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const ResultatUncheckedUpdateOneWithoutImageNestedInput_schema_1 = require("./ResultatUncheckedUpdateOneWithoutImageNestedInput.schema");
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
    resultat: zod_1.z
        .lazy(() => ResultatUncheckedUpdateOneWithoutImageNestedInput_schema_1.ResultatUncheckedUpdateOneWithoutImageNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUncheckedUpdateWithoutQuestionInputObjectSchema = Schema;
