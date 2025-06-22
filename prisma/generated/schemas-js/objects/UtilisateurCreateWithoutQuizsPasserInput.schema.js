"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurCreateWithoutQuizsPasserInputObjectSchema = void 0;
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const QuizCreateNestedManyWithoutAutheurInput_schema_1 = require("./QuizCreateNestedManyWithoutAutheurInput.schema");
const UtilModifierQuizCreateNestedManyWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateNestedManyWithoutUtilisateurInput.schema");
const UtilResultatCreateNestedManyWithoutJoueurInput_schema_1 = require("./UtilResultatCreateNestedManyWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    email: zod_1.z.string(),
    nom: zod_1.z.string(),
    prenom: zod_1.z.string(),
    mdp: zod_1.z.string(),
    role: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(),
    quizs: zod_1.z
        .lazy(() => QuizCreateNestedManyWithoutAutheurInput_schema_1.QuizCreateNestedManyWithoutAutheurInputObjectSchema)
        .optional(),
    quizsModifier: zod_1.z
        .lazy(() => UtilModifierQuizCreateNestedManyWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateNestedManyWithoutUtilisateurInputObjectSchema)
        .optional(),
    resultats: zod_1.z
        .lazy(() => UtilResultatCreateNestedManyWithoutJoueurInput_schema_1.UtilResultatCreateNestedManyWithoutJoueurInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurCreateWithoutQuizsPasserInputObjectSchema = Schema;
