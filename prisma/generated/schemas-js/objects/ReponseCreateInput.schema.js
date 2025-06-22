"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateNestedManyWithoutReponsesInput_schema_1 = require("./ResultatCreateNestedManyWithoutReponsesInput.schema");
const QuestionCreateNestedManyWithoutReponsesInput_schema_1 = require("./QuestionCreateNestedManyWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    text_reponse: zod_1.z.string(),
    score_reponse: zod_1.z.number(),
    resultats: zod_1.z
        .lazy(() => ResultatCreateNestedManyWithoutReponsesInput_schema_1.ResultatCreateNestedManyWithoutReponsesInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionCreateNestedManyWithoutReponsesInput_schema_1.QuestionCreateNestedManyWithoutReponsesInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseCreateInputObjectSchema = Schema;
