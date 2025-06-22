"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateManySchema = void 0;
const zod_1 = require("zod");
const ImageCreateManyInput_schema_1 = require("./objects/ImageCreateManyInput.schema");
exports.ImageCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        ImageCreateManyInput_schema_1.ImageCreateManyInputObjectSchema,
        zod_1.z.array(ImageCreateManyInput_schema_1.ImageCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
