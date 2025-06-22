"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateNestedOneWithoutImageInput_schema_1 = require("./ResultatCreateNestedOneWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    url: zod_1.z.string(),
    prompt: zod_1.z.string(),
    resultat: zod_1.z
        .lazy(() => ResultatCreateNestedOneWithoutImageInput_schema_1.ResultatCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageCreateWithoutQuestionInputObjectSchema = Schema;
