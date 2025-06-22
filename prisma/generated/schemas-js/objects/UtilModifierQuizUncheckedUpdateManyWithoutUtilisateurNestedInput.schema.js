"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateWithoutUtilisateurInput.schema");
const UtilModifierQuizUncheckedCreateWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutUtilisateurInput.schema");
const UtilModifierQuizCreateOrConnectWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizCreateOrConnectWithoutUtilisateurInput.schema");
const UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInput.schema");
const UtilModifierQuizCreateManyUtilisateurInputEnvelope_schema_1 = require("./UtilModifierQuizCreateManyUtilisateurInputEnvelope.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInput.schema");
const UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInput_schema_1 = require("./UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInput.schema");
const UtilModifierQuizScalarWhereInput_schema_1 = require("./UtilModifierQuizScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInput_schema_1.UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInput_schema_1.UtilModifierQuizUpsertWithWhereUniqueWithoutUtilisateurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilModifierQuizCreateManyUtilisateurInputEnvelope_schema_1.UtilModifierQuizCreateManyUtilisateurInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInput_schema_1.UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInput_schema_1.UtilModifierQuizUpdateWithWhereUniqueWithoutUtilisateurInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInput_schema_1.UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInput_schema_1.UtilModifierQuizUpdateManyWithWhereWithoutUtilisateurInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizScalarWhereInput_schema_1.UtilModifierQuizScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizScalarWhereInput_schema_1.UtilModifierQuizScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilModifierQuizUncheckedUpdateManyWithoutUtilisateurNestedInputObjectSchema = Schema;
