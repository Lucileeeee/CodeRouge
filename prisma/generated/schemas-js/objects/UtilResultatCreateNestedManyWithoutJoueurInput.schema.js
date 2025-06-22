"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateNestedManyWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateWithoutJoueurInput_schema_1 = require("./UtilResultatCreateWithoutJoueurInput.schema");
const UtilResultatUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutJoueurInput.schema");
const UtilResultatCreateOrConnectWithoutJoueurInput_schema_1 = require("./UtilResultatCreateOrConnectWithoutJoueurInput.schema");
const UtilResultatCreateManyJoueurInputEnvelope_schema_1 = require("./UtilResultatCreateManyJoueurInputEnvelope.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatCreateWithoutJoueurInput_schema_1.UtilResultatCreateWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatCreateWithoutJoueurInput_schema_1.UtilResultatCreateWithoutJoueurInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => UtilResultatUncheckedCreateWithoutJoueurInput_schema_1.UtilResultatUncheckedCreateWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUncheckedCreateWithoutJoueurInput_schema_1.UtilResultatUncheckedCreateWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatCreateOrConnectWithoutJoueurInput_schema_1.UtilResultatCreateOrConnectWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatCreateOrConnectWithoutJoueurInput_schema_1.UtilResultatCreateOrConnectWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilResultatCreateManyJoueurInputEnvelope_schema_1.UtilResultatCreateManyJoueurInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.UtilResultatCreateNestedManyWithoutJoueurInputObjectSchema = Schema;
