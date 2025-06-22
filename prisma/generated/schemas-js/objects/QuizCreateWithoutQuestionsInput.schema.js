"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilisateurCreateNestedOneWithoutQuizsInput_schema_1 = require("./UtilisateurCreateNestedOneWithoutQuizsInput.schema");
const UtilModifierQuizCreateNestedManyWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateNestedManyWithoutQuizInput.schema");
const UtilPasserQuizCreateNestedManyWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateNestedManyWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    createdAt: zod_1.z.coerce.date().optional(),
    titre: zod_1.z.string(),
    disponible: zod_1.z.boolean().optional(),
    autheur: zod_1.z.lazy(() => UtilisateurCreateNestedOneWithoutQuizsInput_schema_1.UtilisateurCreateNestedOneWithoutQuizsInputObjectSchema),
    editeurs: zod_1.z
        .lazy(() => UtilModifierQuizCreateNestedManyWithoutQuizInput_schema_1.UtilModifierQuizCreateNestedManyWithoutQuizInputObjectSchema)
        .optional(),
    joueurs: zod_1.z
        .lazy(() => UtilPasserQuizCreateNestedManyWithoutQuizInput_schema_1.UtilPasserQuizCreateNestedManyWithoutQuizInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuizCreateWithoutQuestionsInputObjectSchema = Schema;
