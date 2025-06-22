"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizUpdateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUpdateWithoutUtilisateurInput.schema");
const UtilModifierQuizUncheckedUpdateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUncheckedUpdateWithoutUtilisateurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateWithoutUtilisateurInput_schema_1.UtilModifierQuizUpdateWithoutUtilisateurInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedUpdateWithoutUtilisateurInput_schema_1.UtilModifierQuizUncheckedUpdateWithoutUtilisateurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInputObjectSchema = Schema;
