"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateOneSchema = void 0;
const zod_1 = require("zod");
const ImageCreateInput_schema_1 = require("./objects/ImageCreateInput.schema");
const ImageUncheckedCreateInput_schema_1 = require("./objects/ImageUncheckedCreateInput.schema");
exports.ImageCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ImageCreateInput_schema_1.ImageCreateInputObjectSchema,
        ImageUncheckedCreateInput_schema_1.ImageUncheckedCreateInputObjectSchema,
    ]),
});
