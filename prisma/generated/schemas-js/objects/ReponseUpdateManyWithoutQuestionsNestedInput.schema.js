"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateManyWithoutQuestionsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateWithoutQuestionsInput_schema_1 = require("./ReponseCreateWithoutQuestionsInput.schema");
const ReponseUncheckedCreateWithoutQuestionsInput_schema_1 = require("./ReponseUncheckedCreateWithoutQuestionsInput.schema");
const ReponseCreateOrConnectWithoutQuestionsInput_schema_1 = require("./ReponseCreateOrConnectWithoutQuestionsInput.schema");
const ReponseUpsertWithWhereUniqueWithoutQuestionsInput_schema_1 = require("./ReponseUpsertWithWhereUniqueWithoutQuestionsInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseUpdateWithWhereUniqueWithoutQuestionsInput_schema_1 = require("./ReponseUpdateWithWhereUniqueWithoutQuestionsInput.schema");
const ReponseUpdateManyWithWhereWithoutQuestionsInput_schema_1 = require("./ReponseUpdateManyWithWhereWithoutQuestionsInput.schema");
const ReponseScalarWhereInput_schema_1 = require("./ReponseScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateWithoutQuestionsInput_schema_1.ReponseCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => ReponseCreateWithoutQuestionsInput_schema_1.ReponseCreateWithoutQuestionsInputObjectSchema).array(),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutQuestionsInput_schema_1.ReponseUncheckedCreateWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUncheckedCreateWithoutQuestionsInput_schema_1.ReponseUncheckedCreateWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateOrConnectWithoutQuestionsInput_schema_1.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseCreateOrConnectWithoutQuestionsInput_schema_1.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseUpsertWithWhereUniqueWithoutQuestionsInput_schema_1.ReponseUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpsertWithWhereUniqueWithoutQuestionsInput_schema_1.ReponseUpsertWithWhereUniqueWithoutQuestionsInputObjectSchema)
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
        zod_1.z.lazy(() => ReponseUpdateWithWhereUniqueWithoutQuestionsInput_schema_1.ReponseUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpdateWithWhereUniqueWithoutQuestionsInput_schema_1.ReponseUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseUpdateManyWithWhereWithoutQuestionsInput_schema_1.ReponseUpdateManyWithWhereWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUpdateManyWithWhereWithoutQuestionsInput_schema_1.ReponseUpdateManyWithWhereWithoutQuestionsInputObjectSchema)
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
exports.ReponseUpdateManyWithoutQuestionsNestedInputObjectSchema = Schema;
