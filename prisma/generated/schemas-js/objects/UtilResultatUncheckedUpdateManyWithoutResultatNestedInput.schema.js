"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUncheckedUpdateManyWithoutResultatNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateWithoutResultatInput_schema_1 = require("./UtilResultatCreateWithoutResultatInput.schema");
const UtilResultatUncheckedCreateWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutResultatInput.schema");
const UtilResultatCreateOrConnectWithoutResultatInput_schema_1 = require("./UtilResultatCreateOrConnectWithoutResultatInput.schema");
const UtilResultatUpsertWithWhereUniqueWithoutResultatInput_schema_1 = require("./UtilResultatUpsertWithWhereUniqueWithoutResultatInput.schema");
const UtilResultatCreateManyResultatInputEnvelope_schema_1 = require("./UtilResultatCreateManyResultatInputEnvelope.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithWhereUniqueWithoutResultatInput_schema_1 = require("./UtilResultatUpdateWithWhereUniqueWithoutResultatInput.schema");
const UtilResultatUpdateManyWithWhereWithoutResultatInput_schema_1 = require("./UtilResultatUpdateManyWithWhereWithoutResultatInput.schema");
const UtilResultatScalarWhereInput_schema_1 = require("./UtilResultatScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatCreateWithoutResultatInput_schema_1.UtilResultatCreateWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatCreateWithoutResultatInput_schema_1.UtilResultatCreateWithoutResultatInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilResultatUncheckedCreateWithoutResultatInput_schema_1.UtilResultatUncheckedCreateWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUncheckedCreateWithoutResultatInput_schema_1.UtilResultatUncheckedCreateWithoutResultatInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatCreateOrConnectWithoutResultatInput_schema_1.UtilResultatCreateOrConnectWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatCreateOrConnectWithoutResultatInput_schema_1.UtilResultatCreateOrConnectWithoutResultatInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatUpsertWithWhereUniqueWithoutResultatInput_schema_1.UtilResultatUpsertWithWhereUniqueWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpsertWithWhereUniqueWithoutResultatInput_schema_1.UtilResultatUpsertWithWhereUniqueWithoutResultatInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilResultatCreateManyResultatInputEnvelope_schema_1.UtilResultatCreateManyResultatInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatUpdateWithWhereUniqueWithoutResultatInput_schema_1.UtilResultatUpdateWithWhereUniqueWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpdateWithWhereUniqueWithoutResultatInput_schema_1.UtilResultatUpdateWithWhereUniqueWithoutResultatInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatUpdateManyWithWhereWithoutResultatInput_schema_1.UtilResultatUpdateManyWithWhereWithoutResultatInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpdateManyWithWhereWithoutResultatInput_schema_1.UtilResultatUpdateManyWithWhereWithoutResultatInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatScalarWhereInput_schema_1.UtilResultatScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatScalarWhereInput_schema_1.UtilResultatScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilResultatUncheckedUpdateManyWithoutResultatNestedInputObjectSchema = Schema;
