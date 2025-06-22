"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateManySchema = void 0;
const zod_1 = require("zod");
const ImageUpdateManyMutationInput_schema_1 = require("./objects/ImageUpdateManyMutationInput.schema");
const ImageWhereInput_schema_1 = require("./objects/ImageWhereInput.schema");
exports.ImageUpdateManySchema = zod_1.z.object({
    data: ImageUpdateManyMutationInput_schema_1.ImageUpdateManyMutationInputObjectSchema,
    where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(),
});
