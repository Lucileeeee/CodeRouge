"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizCreateWithoutJoueurInput.schema");
const UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutJoueurInput.schema");
const UtilPasserQuizCreateOrConnectWithoutJoueurInput_schema_1 = require("./UtilPasserQuizCreateOrConnectWithoutJoueurInput.schema");
const UtilPasserQuizCreateManyJoueurInputEnvelope_schema_1 = require("./UtilPasserQuizCreateManyJoueurInputEnvelope.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => UtilPasserQuizCreateManyJoueurInputEnvelope_schema_1.UtilPasserQuizCreateManyJoueurInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilPasserQuizUncheckedCreateNestedManyWithoutJoueurInputObjectSchema = Schema;
