"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateManyWithoutQuizNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutQuizInput.schema");
const UtilPasserQuizCreateOrConnectWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateOrConnectWithoutQuizInput.schema");
const UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1 = require("./UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInput.schema");
const UtilPasserQuizCreateManyQuizInputEnvelope_schema_1 = require("./UtilPasserQuizCreateManyQuizInputEnvelope.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1 = require("./UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInput.schema");
const UtilPasserQuizUpdateManyWithWhereWithoutQuizInput_schema_1 = require("./UtilPasserQuizUpdateManyWithWhereWithoutQuizInput.schema");
const UtilPasserQuizScalarWhereInput_schema_1 = require("./UtilPasserQuizScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizCreateWithoutQuizInput_schema_1.UtilPasserQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizCreateWithoutQuizInput_schema_1.UtilPasserQuizCreateWithoutQuizInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedCreateWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedCreateWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizCreateOrConnectWithoutQuizInput_schema_1.UtilPasserQuizCreateOrConnectWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizCreateOrConnectWithoutQuizInput_schema_1.UtilPasserQuizCreateOrConnectWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1.UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInput_schema_1.UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilPasserQuizCreateManyQuizInputEnvelope_schema_1.UtilPasserQuizCreateManyQuizInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1.UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInput_schema_1.UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateManyWithWhereWithoutQuizInput_schema_1.UtilPasserQuizUpdateManyWithWhereWithoutQuizInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpdateManyWithWhereWithoutQuizInput_schema_1.UtilPasserQuizUpdateManyWithWhereWithoutQuizInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizScalarWhereInput_schema_1.UtilPasserQuizScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizScalarWhereInput_schema_1.UtilPasserQuizScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilPasserQuizUpdateManyWithoutQuizNestedInputObjectSchema = Schema;
