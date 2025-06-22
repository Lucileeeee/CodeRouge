"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateNestedOneWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageCreateWithoutQuestionInput_schema_1 = require("./ImageCreateWithoutQuestionInput.schema");
const ImageUncheckedCreateWithoutQuestionInput_schema_1 = require("./ImageUncheckedCreateWithoutQuestionInput.schema");
const ImageCreateOrConnectWithoutQuestionInput_schema_1 = require("./ImageCreateOrConnectWithoutQuestionInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.ImageCreateNestedOneWithoutQuestionInputObjectSchema = Schema;
