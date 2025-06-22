"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateManyWithoutJoueurNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateWithoutJoueurInput_schema_1 = require("./UtilResultatCreateWithoutJoueurInput.schema");
const UtilResultatUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutJoueurInput.schema");
const UtilResultatCreateOrConnectWithoutJoueurInput_schema_1 = require("./UtilResultatCreateOrConnectWithoutJoueurInput.schema");
const UtilResultatUpsertWithWhereUniqueWithoutJoueurInput_schema_1 = require("./UtilResultatUpsertWithWhereUniqueWithoutJoueurInput.schema");
const UtilResultatCreateManyJoueurInputEnvelope_schema_1 = require("./UtilResultatCreateManyJoueurInputEnvelope.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithWhereUniqueWithoutJoueurInput_schema_1 = require("./UtilResultatUpdateWithWhereUniqueWithoutJoueurInput.schema");
const UtilResultatUpdateManyWithWhereWithoutJoueurInput_schema_1 = require("./UtilResultatUpdateManyWithWhereWithoutJoueurInput.schema");
const UtilResultatScalarWhereInput_schema_1 = require("./UtilResultatScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatUpsertWithWhereUniqueWithoutJoueurInput_schema_1.UtilResultatUpsertWithWhereUniqueWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpsertWithWhereUniqueWithoutJoueurInput_schema_1.UtilResultatUpsertWithWhereUniqueWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => UtilResultatCreateManyJoueurInputEnvelope_schema_1.UtilResultatCreateManyJoueurInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => UtilResultatUpdateWithWhereUniqueWithoutJoueurInput_schema_1.UtilResultatUpdateWithWhereUniqueWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpdateWithWhereUniqueWithoutJoueurInput_schema_1.UtilResultatUpdateWithWhereUniqueWithoutJoueurInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => UtilResultatUpdateManyWithWhereWithoutJoueurInput_schema_1.UtilResultatUpdateManyWithWhereWithoutJoueurInputObjectSchema),
        zod_1.z
            .lazy(() => UtilResultatUpdateManyWithWhereWithoutJoueurInput_schema_1.UtilResultatUpdateManyWithWhereWithoutJoueurInputObjectSchema)
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
exports.UtilResultatUpdateManyWithoutJoueurNestedInputObjectSchema = Schema;
