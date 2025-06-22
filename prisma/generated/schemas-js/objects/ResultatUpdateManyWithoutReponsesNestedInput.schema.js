"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateManyWithoutReponsesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateWithoutReponsesInput_schema_1 = require("./ResultatCreateWithoutReponsesInput.schema");
const ResultatUncheckedCreateWithoutReponsesInput_schema_1 = require("./ResultatUncheckedCreateWithoutReponsesInput.schema");
const ResultatCreateOrConnectWithoutReponsesInput_schema_1 = require("./ResultatCreateOrConnectWithoutReponsesInput.schema");
const ResultatUpsertWithWhereUniqueWithoutReponsesInput_schema_1 = require("./ResultatUpsertWithWhereUniqueWithoutReponsesInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatUpdateWithWhereUniqueWithoutReponsesInput_schema_1 = require("./ResultatUpdateWithWhereUniqueWithoutReponsesInput.schema");
const ResultatUpdateManyWithWhereWithoutReponsesInput_schema_1 = require("./ResultatUpdateManyWithWhereWithoutReponsesInput.schema");
const ResultatScalarWhereInput_schema_1 = require("./ResultatScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatCreateWithoutReponsesInput_schema_1.ResultatCreateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => ResultatCreateWithoutReponsesInput_schema_1.ResultatCreateWithoutReponsesInputObjectSchema).array(),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutReponsesInput_schema_1.ResultatUncheckedCreateWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => ResultatUncheckedCreateWithoutReponsesInput_schema_1.ResultatUncheckedCreateWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatCreateOrConnectWithoutReponsesInput_schema_1.ResultatCreateOrConnectWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => ResultatCreateOrConnectWithoutReponsesInput_schema_1.ResultatCreateOrConnectWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatUpsertWithWhereUniqueWithoutReponsesInput_schema_1.ResultatUpsertWithWhereUniqueWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => ResultatUpsertWithWhereUniqueWithoutReponsesInput_schema_1.ResultatUpsertWithWhereUniqueWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatUpdateWithWhereUniqueWithoutReponsesInput_schema_1.ResultatUpdateWithWhereUniqueWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => ResultatUpdateWithWhereUniqueWithoutReponsesInput_schema_1.ResultatUpdateWithWhereUniqueWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatUpdateManyWithWhereWithoutReponsesInput_schema_1.ResultatUpdateManyWithWhereWithoutReponsesInputObjectSchema),
        zod_1.z
            .lazy(() => ResultatUpdateManyWithWhereWithoutReponsesInput_schema_1.ResultatUpdateManyWithWhereWithoutReponsesInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatScalarWhereInput_schema_1.ResultatScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ResultatScalarWhereInput_schema_1.ResultatScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ResultatUpdateManyWithoutReponsesNestedInputObjectSchema = Schema;
