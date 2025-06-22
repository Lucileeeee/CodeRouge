"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateNestedOneWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateWithoutResultatInput_schema_1 = require("./ImageCreateWithoutResultatInput.schema");
const ImageUncheckedCreateWithoutResultatInput_schema_1 = require("./ImageUncheckedCreateWithoutResultatInput.schema");
const ImageCreateOrConnectWithoutResultatInput_schema_1 = require("./ImageCreateOrConnectWithoutResultatInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.ImageCreateNestedOneWithoutResultatInputObjectSchema = Schema;
