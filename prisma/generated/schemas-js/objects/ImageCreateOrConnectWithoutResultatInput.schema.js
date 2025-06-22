"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateOrConnectWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageCreateWithoutResultatInput_schema_1 = require("./ImageCreateWithoutResultatInput.schema");
const ImageUncheckedCreateWithoutResultatInput_schema_1 = require("./ImageUncheckedCreateWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ImageCreateWithoutResultatInput_schema_1.ImageCreateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutResultatInput_schema_1.ImageUncheckedCreateWithoutResultatInputObjectSchema),
    ]),
})
    .strict();
exports.ImageCreateOrConnectWithoutResultatInputObjectSchema = Schema;
