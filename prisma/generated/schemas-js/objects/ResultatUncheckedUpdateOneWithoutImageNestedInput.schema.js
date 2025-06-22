"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUncheckedUpdateOneWithoutImageNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateWithoutImageInput_schema_1 = require("./ResultatCreateWithoutImageInput.schema");
const ResultatUncheckedCreateWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateWithoutImageInput.schema");
const ResultatCreateOrConnectWithoutImageInput_schema_1 = require("./ResultatCreateOrConnectWithoutImageInput.schema");
const ResultatUpsertWithoutImageInput_schema_1 = require("./ResultatUpsertWithoutImageInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatUpdateWithoutImageInput_schema_1 = require("./ResultatUpdateWithoutImageInput.schema");
const ResultatUncheckedUpdateWithoutImageInput_schema_1 = require("./ResultatUncheckedUpdateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatCreateWithoutImageInput_schema_1.ResultatCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutImageInput_schema_1.ResultatUncheckedCreateWithoutImageInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ResultatCreateOrConnectWithoutImageInput_schema_1.ResultatCreateOrConnectWithoutImageInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => ResultatUpsertWithoutImageInput_schema_1.ResultatUpsertWithoutImageInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatUpdateWithoutImageInput_schema_1.ResultatUpdateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutImageInput_schema_1.ResultatUncheckedUpdateWithoutImageInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ResultatUncheckedUpdateOneWithoutImageNestedInputObjectSchema = Schema;
