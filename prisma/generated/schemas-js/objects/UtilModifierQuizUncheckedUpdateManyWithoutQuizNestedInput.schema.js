"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUncheckedUpdateManyWithoutQuizNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateWithoutQuizInput.schema");
const UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutQuizInput.schema");
const UtilModifierQuizCreateOrConnectWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateOrConnectWithoutQuizInput.schema");
const UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1 = require("./UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInput.schema");
const UtilModifierQuizCreateManyQuizInputEnvelope_schema_1 = require("./UtilModifierQuizCreateManyQuizInputEnvelope.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1 = require("./UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInput.schema");
const UtilModifierQuizUpdateManyWithWhereWithoutQuizInput_schema_1 = require("./UtilModifierQuizUpdateManyWithWhereWithoutQuizInput.schema");
const UtilModifierQuizScalarWhereInput_schema_1 = require("./UtilModifierQuizScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizCreateWithoutQuizInput_schema_1.UtilModifierQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizCreateWithoutQuizInput_schema_1.UtilModifierQuizCreateWithoutQuizInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1.UtilModifierQuizUncheckedCreateWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1.UtilModifierQuizUncheckedCreateWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizCreateOrConnectWithoutQuizInput_schema_1.UtilModifierQuizCreateOrConnectWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizCreateOrConnectWithoutQuizInput_schema_1.UtilModifierQuizCreateOrConnectWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1.UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1.UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilModifierQuizCreateManyQuizInputEnvelope_schema_1.UtilModifierQuizCreateManyQuizInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1.UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1.UtilModifierQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateManyWithWhereWithoutQuizInput_schema_1.UtilModifierQuizUpdateManyWithWhereWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilModifierQuizUpdateManyWithWhereWithoutQuizInput_schema_1.UtilModifierQuizUpdateManyWithWhereWithoutQuizInputObjectSchema)
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
exports.UtilModifierQuizUncheckedUpdateManyWithoutQuizNestedInputObjectSchema = Schema;
