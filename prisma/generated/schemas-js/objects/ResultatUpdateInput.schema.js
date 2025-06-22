"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const ImageUpdateOneWithoutResultatNestedInput_schema_1 = require("./ImageUpdateOneWithoutResultatNestedInput.schema");
const ReponseUpdateManyWithoutResultatsNestedInput_schema_1 = require("./ReponseUpdateManyWithoutResultatsNestedInput.schema");
const UtilResultatUpdateManyWithoutResultatNestedInput_schema_1 = require("./UtilResultatUpdateManyWithoutResultatNestedInput.schema");
const Schema = zod_1.z
    .object({
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
    image: zod_1.z
        .lazy(() => ImageUpdateOneWithoutResultatNestedInput_schema_1.ImageUpdateOneWithoutResultatNestedInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseUpdateManyWithoutResultatsNestedInput_schema_1.ReponseUpdateManyWithoutResultatsNestedInputObjectSchema)
        .optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatUpdateManyWithoutResultatNestedInput_schema_1.UtilResultatUpdateManyWithoutResultatNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatUpdateInputObjectSchema = Schema;
