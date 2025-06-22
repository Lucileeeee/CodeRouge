"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUncheckedUpdateWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const Role_schema_1 = require("../enums/Role.schema");
const EnumRoleFieldUpdateOperationsInput_schema_1 = require("./EnumRoleFieldUpdateOperationsInput.schema");
const QuizUncheckedUpdateManyWithoutAutheurNestedInput_schema_1 = require("./QuizUncheckedUpdateManyWithoutAutheurNestedInput.schema");
const UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInput_schema_1 = require("./UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInput.schema");
const UtilPasserQuizUncheckedUpdateManyWithoutJoueurNestedInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateManyWithoutJoueurNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    nom: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    prenom: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    mdp: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    role: zod_1.z
        .union([
        zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => EnumRoleFieldUpdateOperationsInput_schema_1.EnumRoleFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    quizs: zod_1.z
        .lazy(() => QuizUncheckedUpdateManyWithoutAutheurNestedInput_schema_1.QuizUncheckedUpdateManyWithoutAutheurNestedInputObjectSchema)
        .optional(),
    quizsModifier: zod_1.z
        .lazy(() => UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInput_schema_1.UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInputObjectSchema)
        .optional(),
    quizsPasser: zod_1.z
        .lazy(() => UtilPasserQuizUncheckedUpdateManyWithoutJoueurNestedInput_schema_1.UtilPasserQuizUncheckedUpdateManyWithoutJoueurNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurUncheckedUpdateWithoutResultatsInputObjectSchema = Schema;
