"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpdateWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInput_schema_1 = require("./UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    utilisateur: zod_1.z
        .lazy(() => UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInput_schema_1.UtilisateurUpdateOneRequiredWithoutQuizsModifierNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilModifierQuizUpdateWithoutQuizInputObjectSchema = Schema;
