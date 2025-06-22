"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateNestedManyWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateWithoutQuizInput.schema");
const UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutQuizInput.schema");
const UtilModifierQuizCreateOrConnectWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateOrConnectWithoutQuizInput.schema");
const UtilModifierQuizCreateManyQuizInputEnvelope_schema_1 = require("./UtilModifierQuizCreateManyQuizInputEnvelope.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => UtilModifierQuizCreateManyQuizInputEnvelope_schema_1.UtilModifierQuizCreateManyQuizInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilModifierQuizCreateNestedManyWithoutQuizInputObjectSchema = Schema;
