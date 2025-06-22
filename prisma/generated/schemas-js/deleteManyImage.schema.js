"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDeleteManySchema = void 0;
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./objects/ImageWhereInput.schema");
exports.ImageDeleteManySchema = zod_1.z.object({
    where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(),
});
