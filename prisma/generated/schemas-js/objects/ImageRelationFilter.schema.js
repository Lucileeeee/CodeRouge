"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.ImageRelationFilterObjectSchema = Schema;
