"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpsertSchema = void 0;
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./objects/ImageWhereUniqueInput.schema");
const ImageCreateInput_schema_1 = require("./objects/ImageCreateInput.schema");
const ImageUncheckedCreateInput_schema_1 = require("./objects/ImageUncheckedCreateInput.schema");
const ImageUpdateInput_schema_1 = require("./objects/ImageUpdateInput.schema");
const ImageUncheckedUpdateInput_schema_1 = require("./objects/ImageUncheckedUpdateInput.schema");
exports.ImageUpsertSchema = zod_1.z.object({
    where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        ImageCreateInput_schema_1.ImageCreateInputObjectSchema,
        ImageUncheckedCreateInput_schema_1.ImageUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        ImageUpdateInput_schema_1.ImageUpdateInputObjectSchema,
        ImageUncheckedUpdateInput_schema_1.ImageUncheckedUpdateInputObjectSchema,
    ]),
});
