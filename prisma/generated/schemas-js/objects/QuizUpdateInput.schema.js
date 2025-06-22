"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const UtilisateurUpdateOneRequiredWithoutQuizsNestedInput_schema_1 = require("./UtilisateurUpdateOneRequiredWithoutQuizsNestedInput.schema");
const UtilModifierQuizUpdateManyWithoutQuizNestedInput_schema_1 = require("./UtilModifierQuizUpdateManyWithoutQuizNestedInput.schema");
const UtilPasserQuizUpdateManyWithoutQuizNestedInput_schema_1 = require("./UtilPasserQuizUpdateManyWithoutQuizNestedInput.schema");
const QuestionUpdateManyWithoutQuizsNestedInput_schema_1 = require("./QuestionUpdateManyWithoutQuizsNestedInput.schema");
const Schema = zod_1.z
    .object({
    createdAt: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    titre: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    disponible: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    autheur: zod_1.z
        .lazy(() => UtilisateurUpdateOneRequiredWithoutQuizsNestedInput_schema_1.UtilisateurUpdateOneRequiredWithoutQuizsNestedInputObjectSchema)
        .optional(),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizUpdateManyWithoutQuizNestedInput_schema_1.UtilModifierQuizUpdateManyWithoutQuizNestedInputObjectSchema)
        .optional(),
    joueurs: zod_1.z
        .lazy(() => UtilPasserQuizUpdateManyWithoutQuizNestedInput_schema_1.UtilPasserQuizUpdateManyWithoutQuizNestedInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionUpdateManyWithoutQuizsNestedInput_schema_1.QuestionUpdateManyWithoutQuizsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuizUpdateInputObjectSchema = Schema;
