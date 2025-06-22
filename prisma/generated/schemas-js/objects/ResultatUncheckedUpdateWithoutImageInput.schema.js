"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUncheckedUpdateWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const ReponseUncheckedUpdateManyWithoutResultatsNestedInput_schema_1 = require("./ReponseUncheckedUpdateManyWithoutResultatsNestedInput.schema");
const UtilResultatUncheckedUpdateManyWithoutResultatNestedInput_schema_1 = require("./UtilResultatUncheckedUpdateManyWithoutResultatNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    titre: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    resultat_score_min: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    resultat_score_max: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseUncheckedUpdateManyWithoutResultatsNestedInput_schema_1.ReponseUncheckedUpdateManyWithoutResultatsNestedInputObjectSchema)
        .optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatUncheckedUpdateManyWithoutResultatNestedInput_schema_1.UtilResultatUncheckedUpdateManyWithoutResultatNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatUncheckedUpdateWithoutImageInputObjectSchema = Schema;
