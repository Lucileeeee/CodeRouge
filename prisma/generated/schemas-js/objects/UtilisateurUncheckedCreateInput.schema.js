"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const QuizUncheckedCreateNestedManyWithoutAutheurInput_schema_1 = require("./QuizUncheckedCreateNestedManyWithoutAutheurInput.schema");
const UtilModifierQuizUncheckedCreateNestedManyWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUncheckedCreateNestedManyWithoutUtilisateurInput.schema");
const UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInput.schema");
const UtilResultatUncheckedCreateNestedManyWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedCreateNestedManyWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    email: zod_1.z.string(),
    nom: zod_1.z.string(),
    prenom: zod_1.z.string(),
    mdp: zod_1.z.string(),
    role: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(),
    quizs: zod_1.z
        .lazy(() => QuizUncheckedCreateNestedManyWithoutAutheurInput_schema_1.QuizUncheckedCreateNestedManyWithoutAutheurInputObjectSchema)
        .optional(),
    quizsModifier: zod_1.z
        .lazy(() => UtilModifierQuizUncheckedCreateNestedManyWithoutUtilisateurInput_schema_1.UtilModifierQuizUncheckedCreateNestedManyWithoutUtilisateurInputObjectSchema)
        .optional(),
    quizsPasser: zod_1.z
        .lazy(() => UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInputObjectSchema)
        .optional(),
    resultats: zod_1.z
        .lazy(() => UtilResultatUncheckedCreateNestedManyWithoutJoueurInput_schema_1.UtilResultatUncheckedCreateNestedManyWithoutJoueurInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurUncheckedCreateInputObjectSchema = Schema;
