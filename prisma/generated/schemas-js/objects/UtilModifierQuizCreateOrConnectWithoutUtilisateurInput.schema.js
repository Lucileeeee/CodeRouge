"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateOrConnectWithoutUtilisateurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateWithoutUtilisateurInput.schema");
const UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutUtilisateurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateWithoutUtilisateurInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizUncheckedCreateWithoutUtilisateurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilModifierQuizCreateOrConnectWithoutUtilisateurInputObjectSchema = Schema;
