"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpsertWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const ImageUpdateWithoutQuestionInput_schema_1 = require("./ImageUpdateWithoutQuestionInput.schema");
const ImageUncheckedUpdateWithoutQuestionInput_schema_1 = require("./ImageUncheckedUpdateWithoutQuestionInput.schema");
const ImageCreateWithoutQuestionInput_schema_1 = require("./ImageCreateWithoutQuestionInput.schema");
const ImageUncheckedCreateWithoutQuestionInput_schema_1 = require("./ImageUncheckedCreateWithoutQuestionInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => ImageUpdateWithoutQuestionInput_schema_1.ImageUpdateWithoutQuestionInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedUpdateWithoutQuestionInput_schema_1.ImageUncheckedUpdateWithoutQuestionInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ImageCreateWithoutQuestionInput_schema_1.ImageCreateWithoutQuestionInputObjectSchema),
        zod_1.z.lazy(() => ImageUncheckedCreateWithoutQuestionInput_schema_1.ImageUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
})
    .strict();
exports.ImageUpsertWithoutQuestionInputObjectSchema = Schema;
