"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFindManySchema = void 0;
const zod_1 = require("zod");
const ImageOrderByWithRelationInput_schema_1 = require("./objects/ImageOrderByWithRelationInput.schema");
const ImageWhereInput_schema_1 = require("./objects/ImageWhereInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./objects/ImageWhereUniqueInput.schema");
const ImageScalarFieldEnum_schema_1 = require("./enums/ImageScalarFieldEnum.schema");
exports.ImageFindManySchema = zod_1.z.object({
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
    distinct: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema).optional(),
});
