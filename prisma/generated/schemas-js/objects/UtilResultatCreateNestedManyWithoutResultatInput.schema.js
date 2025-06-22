"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateNestedManyWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateWithoutResultatInput_schema_1 = require("./UtilResultatCreateWithoutResultatInput.schema");
const UtilResultatUncheckedCreateWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutResultatInput.schema");
const UtilResultatCreateOrConnectWithoutResultatInput_schema_1 = require("./UtilResultatCreateOrConnectWithoutResultatInput.schema");
const UtilResultatCreateManyResultatInputEnvelope_schema_1 = require("./UtilResultatCreateManyResultatInputEnvelope.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => UtilResultatCreateManyResultatInputEnvelope_schema_1.UtilResultatCreateManyResultatInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilResultatCreateNestedManyWithoutResultatInputObjectSchema = Schema;
