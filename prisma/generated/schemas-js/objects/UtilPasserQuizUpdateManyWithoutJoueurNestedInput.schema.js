"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateManyWithoutJoueurNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizCreateWithoutJoueurInput.schema");
const UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutJoueurInput.schema");
const UtilPasserQuizCreateOrConnectWithoutJoueurInput_schema_1 = require("./UtilPasserQuizCreateOrConnectWithoutJoueurInput.schema");
const UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInput.schema");
const UtilPasserQuizCreateManyJoueurInputEnvelope_schema_1 = require("./UtilPasserQuizCreateManyJoueurInputEnvelope.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInput.schema");
const UtilPasserQuizUpdateManyWithWhereWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUpdateManyWithWhereWithoutJoueurInput.schema");
const UtilPasserQuizScalarWhereInput_schema_1 = require("./UtilPasserQuizScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizCreateWithoutJoueurInput_schema_1.UtilPasserQuizCreateWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizCreateWithoutJoueurInput_schema_1.UtilPasserQuizCreateWithoutJoueurInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedCreateWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedCreateWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizCreateOrConnectWithoutJoueurInput_schema_1.UtilPasserQuizCreateOrConnectWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizCreateOrConnectWithoutJoueurInput_schema_1.UtilPasserQuizCreateOrConnectWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInput_schema_1.UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInput_schema_1.UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilPasserQuizCreateManyJoueurInputEnvelope_schema_1.UtilPasserQuizCreateManyJoueurInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInput_schema_1.UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInput_schema_1.UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateManyWithWhereWithoutJoueurInput_schema_1.UtilPasserQuizUpdateManyWithWhereWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilPasserQuizUpdateManyWithWhereWithoutJoueurInput_schema_1.UtilPasserQuizUpdateManyWithWhereWithoutJoueurInputObjectSchema)
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
exports.UtilPasserQuizUpdateManyWithoutJoueurNestedInputObjectSchema = Schema;
