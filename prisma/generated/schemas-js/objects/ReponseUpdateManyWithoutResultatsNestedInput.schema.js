"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateManyWithoutResultatsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateWithoutResultatsInput_schema_1 = require("./ReponseCreateWithoutResultatsInput.schema");
const ReponseUncheckedCreateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedCreateWithoutResultatsInput.schema");
const ReponseCreateOrConnectWithoutResultatsInput_schema_1 = require("./ReponseCreateOrConnectWithoutResultatsInput.schema");
const ReponseUpsertWithWhereUniqueWithoutResultatsInput_schema_1 = require("./ReponseUpsertWithWhereUniqueWithoutResultatsInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseUpdateWithWhereUniqueWithoutResultatsInput_schema_1 = require("./ReponseUpdateWithWhereUniqueWithoutResultatsInput.schema");
const ReponseUpdateManyWithWhereWithoutResultatsInput_schema_1 = require("./ReponseUpdateManyWithWhereWithoutResultatsInput.schema");
const ReponseScalarWhereInput_schema_1 = require("./ReponseScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema).array(),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateOrConnectWithoutResultatsInput_schema_1.ReponseCreateOrConnectWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseCreateOrConnectWithoutResultatsInput_schema_1.ReponseCreateOrConnectWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseUpsertWithWhereUniqueWithoutResultatsInput_schema_1.ReponseUpsertWithWhereUniqueWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpsertWithWhereUniqueWithoutResultatsInput_schema_1.ReponseUpsertWithWhereUniqueWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseUpdateWithWhereUniqueWithoutResultatsInput_schema_1.ReponseUpdateWithWhereUniqueWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpdateWithWhereUniqueWithoutResultatsInput_schema_1.ReponseUpdateWithWhereUniqueWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseUpdateManyWithWhereWithoutResultatsInput_schema_1.ReponseUpdateManyWithWhereWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpdateManyWithWhereWithoutResultatsInput_schema_1.ReponseUpdateManyWithWhereWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseScalarWhereInput_schema_1.ReponseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ReponseScalarWhereInput_schema_1.ReponseScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ReponseUpdateManyWithoutResultatsNestedInputObjectSchema = Schema;
