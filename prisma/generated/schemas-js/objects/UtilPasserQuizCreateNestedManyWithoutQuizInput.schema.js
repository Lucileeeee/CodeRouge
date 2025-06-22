"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateNestedManyWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutQuizInput.schema");
const UtilPasserQuizCreateOrConnectWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateOrConnectWithoutQuizInput.schema");
const UtilPasserQuizCreateManyQuizInputEnvelope_schema_1 = require("./UtilPasserQuizCreateManyQuizInputEnvelope.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => UtilPasserQuizCreateManyQuizInputEnvelope_schema_1.UtilPasserQuizCreateManyQuizInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilPasserQuizCreateNestedManyWithoutQuizInputObjectSchema = Schema;
