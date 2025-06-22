"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpsertWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageUpdateWithoutResultatInput_schema_1 = require("./ImageUpdateWithoutResultatInput.schema");
const ImageUncheckedUpdateWithoutResultatInput_schema_1 = require("./ImageUncheckedUpdateWithoutResultatInput.schema");
const ImageCreateWithoutResultatInput_schema_1 = require("./ImageCreateWithoutResultatInput.schema");
const ImageUncheckedCreateWithoutResultatInput_schema_1 = require("./ImageUncheckedCreateWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => ImageUpdateWithoutResultatInput_schema_1.ImageUpdateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedUpdateWithoutResultatInput_schema_1.ImageUncheckedUpdateWithoutResultatInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ImageCreateWithoutResultatInput_schema_1.ImageCreateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutResultatInput_schema_1.ImageUncheckedCreateWithoutResultatInputObjectSchema),
    ]),
})
    .strict();
exports.ImageUpsertWithoutResultatInputObjectSchema = Schema;
