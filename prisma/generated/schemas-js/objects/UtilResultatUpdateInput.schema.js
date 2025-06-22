"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const UtilisateurUpdateOneRequiredWithoutResultatsNestedInput_schema_1 = require("./UtilisateurUpdateOneRequiredWithoutResultatsNestedInput.schema");
const ResultatUpdateOneRequiredWithoutUtilisateursNestedInput_schema_1 = require("./ResultatUpdateOneRequiredWithoutUtilisateursNestedInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    joueur: zod_1.z
        .lazy(() => UtilisateurUpdateOneRequiredWithoutResultatsNestedInput_schema_1.UtilisateurUpdateOneRequiredWithoutResultatsNestedInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatUpdateOneRequiredWithoutUtilisateursNestedInput_schema_1.ResultatUpdateOneRequiredWithoutUtilisateursNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilResultatUpdateInputObjectSchema = Schema;
