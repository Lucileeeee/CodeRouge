"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateOrConnectWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageCreateWithoutQuestionInput_schema_1 = require("./ImageCreateWithoutQuestionInput.schema");
const ImageUncheckedCreateWithoutQuestionInput_schema_1 = require("./ImageUncheckedCreateWithoutQuestionInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ImageCreateWithoutQuestionInput_schema_1.ImageCreateWithoutQuestionInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutQuestionInput_schema_1.ImageUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
})
    .strict();
exports.ImageCreateOrConnectWithoutQuestionInputObjectSchema = Schema;
