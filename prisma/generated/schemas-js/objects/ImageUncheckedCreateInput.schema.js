"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionUncheckedCreateNestedOneWithoutImageInput_schema_1 = require("./QuestionUncheckedCreateNestedOneWithoutImageInput.schema");
const ResultatUncheckedCreateNestedOneWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateNestedOneWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    url: zod_1.z.string(),
    prompt: zod_1.z.string(),
    question: zod_1.z
        .lazy(() => QuestionUncheckedCreateNestedOneWithoutImageInput_schema_1.QuestionUncheckedCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatUncheckedCreateNestedOneWithoutImageInput_schema_1.ResultatUncheckedCreateNestedOneWithoutImageInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageUncheckedCreateInputObjectSchema = Schema;
