"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateOneWithoutQuestionNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateWithoutQuestionInput_schema_1 = require("./ImageCreateWithoutQuestionInput.schema");
const ImageUncheckedCreateWithoutQuestionInput_schema_1 = require("./ImageUncheckedCreateWithoutQuestionInput.schema");
const ImageCreateOrConnectWithoutQuestionInput_schema_1 = require("./ImageCreateOrConnectWithoutQuestionInput.schema");
const ImageUpsertWithoutQuestionInput_schema_1 = require("./ImageUpsertWithoutQuestionInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageUpdateWithoutQuestionInput_schema_1 = require("./ImageUpdateWithoutQuestionInput.schema");
const ImageUncheckedUpdateWithoutQuestionInput_schema_1 = require("./ImageUncheckedUpdateWithoutQuestionInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageCreateWithoutQuestionInput_schema_1.ImageCreateWithoutQuestionInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutQuestionInput_schema_1.ImageUncheckedCreateWithoutQuestionInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ImageCreateOrConnectWithoutQuestionInput_schema_1.ImageCreateOrConnectWithoutQuestionInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => ImageUpsertWithoutQuestionInput_schema_1.ImageUpsertWithoutQuestionInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageUpdateWithoutQuestionInput_schema_1.ImageUpdateWithoutQuestionInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedUpdateWithoutQuestionInput_schema_1.ImageUncheckedUpdateWithoutQuestionInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ImageUpdateOneWithoutQuestionNestedInputObjectSchema = Schema;
