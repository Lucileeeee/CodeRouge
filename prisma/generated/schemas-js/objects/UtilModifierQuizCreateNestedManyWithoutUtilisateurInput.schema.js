"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateNestedManyWithoutUtilisateurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateWithoutUtilisateurInput.schema");
const UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutUtilisateurInput.schema");
const UtilModifierQuizCreateOrConnectWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateOrConnectWithoutUtilisateurInput.schema");
const UtilModifierQuizCreateManyUtilisateurInputEnvelope_schema_1 = require("./UtilModifierQuizCreateManyUtilisateurInputEnvelope.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateWithoutUtilisateurInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizUncheckedCreateWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1.UtilModifierQuizUncheckedCreateWithoutUtilisateurInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizCreateOrConnectWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateOrConnectWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizCreateOrConnectWithoutUtilisateurInput_schema_1.UtilModifierQuizCreateOrConnectWithoutUtilisateurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilModifierQuizCreateManyUtilisateurInputEnvelope_schema_1.UtilModifierQuizCreateManyUtilisateurInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilModifierQuizCreateNestedManyWithoutUtilisateurInputObjectSchema = Schema;
