"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateOneWithoutResultatNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateWithoutResultatInput_schema_1 = require("./ImageCreateWithoutResultatInput.schema");
const ImageUncheckedCreateWithoutResultatInput_schema_1 = require("./ImageUncheckedCreateWithoutResultatInput.schema");
const ImageCreateOrConnectWithoutResultatInput_schema_1 = require("./ImageCreateOrConnectWithoutResultatInput.schema");
const ImageUpsertWithoutResultatInput_schema_1 = require("./ImageUpsertWithoutResultatInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageUpdateWithoutResultatInput_schema_1 = require("./ImageUpdateWithoutResultatInput.schema");
const ImageUncheckedUpdateWithoutResultatInput_schema_1 = require("./ImageUncheckedUpdateWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageCreateWithoutResultatInput_schema_1.ImageCreateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutResultatInput_schema_1.ImageUncheckedCreateWithoutResultatInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ImageCreateOrConnectWithoutResultatInput_schema_1.ImageCreateOrConnectWithoutResultatInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => ImageUpsertWithoutResultatInput_schema_1.ImageUpsertWithoutResultatInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageUpdateWithoutResultatInput_schema_1.ImageUpdateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedUpdateWithoutResultatInput_schema_1.ImageUncheckedUpdateWithoutResultatInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ImageUpdateOneWithoutResultatNestedInputObjectSchema = Schema;
