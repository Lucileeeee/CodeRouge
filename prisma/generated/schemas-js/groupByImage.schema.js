"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGroupBySchema = void 0;
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./objects/ImageWhereInput.schema");
const ImageOrderByWithAggregationInput_schema_1 = require("./objects/ImageOrderByWithAggregationInput.schema");
const ImageScalarWhereWithAggregatesInput_schema_1 = require("./objects/ImageScalarWhereWithAggregatesInput.schema");
const ImageScalarFieldEnum_schema_1 = require("./enums/ImageScalarFieldEnum.schema");
exports.ImageGroupBySchema = zod_1.z.object({
    where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        ImageOrderByWithAggregationInput_schema_1.ImageOrderByWithAggregationInputObjectSchema,
        ImageOrderByWithAggregationInput_schema_1.ImageOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: ImageScalarWhereWithAggregatesInput_schema_1.ImageScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema),
});
