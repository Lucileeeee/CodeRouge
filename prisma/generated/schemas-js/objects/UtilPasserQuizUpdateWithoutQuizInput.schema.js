"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInput_schema_1 = require("./UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    joueur: zod_1.z
        .lazy(() => UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInput_schema_1.UtilisateurUpdateOneRequiredWithoutQuizsPasserNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilPasserQuizUpdateWithoutQuizInputObjectSchema = Schema;
