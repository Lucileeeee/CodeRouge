"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFindUniqueSchema = void 0;
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./objects/ImageWhereUniqueInput.schema");
exports.ImageFindUniqueSchema = zod_1.z.object({
    where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema,
});
