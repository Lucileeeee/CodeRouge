"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateNestedManyWithoutQuestionsInput_schema_1 = require("./ReponseCreateNestedManyWithoutQuestionsInput.schema");
const ImageCreateNestedOneWithoutQuestionInput_schema_1 = require("./ImageCreateNestedOneWithoutQuestionInput.schema");
const Schema = zod_1.z
    .object({
    text: zod_1.z.string(),
    signalement: zod_1.z.number().optional(),
    disponible: zod_1.z.boolean(),
    reponses: zod_1.z
        .lazy(() => ReponseCreateNestedManyWithoutQuestionsInput_schema_1.ReponseCreateNestedManyWithoutQuestionsInputObjectSchema)
        .optional(),
    image: zod_1.z
        .lazy(() => ImageCreateNestedOneWithoutQuestionInput_schema_1.ImageCreateNestedOneWithoutQuestionInputObjectSchema)
        .optional(),
})
    .strict();
exports.QuestionCreateWithoutQuizsInputObjectSchema = Schema;
