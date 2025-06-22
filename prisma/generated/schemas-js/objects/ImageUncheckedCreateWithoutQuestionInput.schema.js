"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedCreateWithoutQuestionInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatUncheckedCreateNestedOneWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateNestedOneWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    url: zod_1.z.string(),
    prompt: zod_1.z.string(),
    resultat: zod_1.z
        .lazy(() => ResultatUncheckedCreateNestedOneWithoutImageInput_schema_1.ResultatUncheckedCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUncheckedCreateWithoutQuestionInputObjectSchema = Schema;
