"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizScalarWhereInput_schema_1 = require("./UtilModifierQuizScalarWhereInput.schema");
const UtilModifierQuizUpdateManyMutationInput_schema_1 = require("./UtilModifierQuizUpdateManyMutationInput.schema");
const UtilModifierQuizUncheckedUpdateManyWithoutQuizsModifierInput_schema_1 = require("./UtilModifierQuizUncheckedUpdateManyWithoutQuizsModifierInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilModifierQuizScalarWhereInput_schema_1.UtilModifierQuizScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateManyMutationInput_schema_1.UtilModifierQuizUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedUpdateManyWithoutQuizsModifierInput_schema_1.UtilModifierQuizUncheckedUpdateManyWithoutQuizsModifierInputObjectSchema),
    ]),
})
    .strict();
exports.UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInputObjectSchema = Schema;
