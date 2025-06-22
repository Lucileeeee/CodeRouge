"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateOneSchema = void 0;
const zod_1 = require("zod");
const ImageUpdateInput_schema_1 = require("./objects/ImageUpdateInput.schema");
const ImageUncheckedUpdateInput_schema_1 = require("./objects/ImageUncheckedUpdateInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./objects/ImageWhereUniqueInput.schema");
exports.ImageUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ImageUpdateInput_schema_1.ImageUpdateInputObjectSchema,
        ImageUncheckedUpdateInput_schema_1.ImageUncheckedUpdateInputObjectSchema,
    ]),
    where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema,
});
