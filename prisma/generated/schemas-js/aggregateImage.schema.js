"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageAggregateSchema = void 0;
const zod_1 = require("zod");
const ImageOrderByWithRelationInput_schema_1 = require("./objects/ImageOrderByWithRelationInput.schema");
const ImageWhereInput_schema_1 = require("./objects/ImageWhereInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./objects/ImageWhereUniqueInput.schema");
const ImageCountAggregateInput_schema_1 = require("./objects/ImageCountAggregateInput.schema");
const ImageMinAggregateInput_schema_1 = require("./objects/ImageMinAggregateInput.schema");
const ImageMaxAggregateInput_schema_1 = require("./objects/ImageMaxAggregateInput.schema");
const ImageAvgAggregateInput_schema_1 = require("./objects/ImageAvgAggregateInput.schema");
const ImageSumAggregateInput_schema_1 = require("./objects/ImageSumAggregateInput.schema");
exports.ImageAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema,
        ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(),
    cursor: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), ImageCountAggregateInput_schema_1.ImageCountAggregateInputObjectSchema])
        .optional(),
    _min: ImageMinAggregateInput_schema_1.ImageMinAggregateInputObjectSchema.optional(),
    _max: ImageMaxAggregateInput_schema_1.ImageMaxAggregateInputObjectSchema.optional(),
    _avg: ImageAvgAggregateInput_schema_1.ImageAvgAggregateInputObjectSchema.optional(),
    _sum: ImageSumAggregateInput_schema_1.ImageSumAggregateInputObjectSchema.optional(),
});
