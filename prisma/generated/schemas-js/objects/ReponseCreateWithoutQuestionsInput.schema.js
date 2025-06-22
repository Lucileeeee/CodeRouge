"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateNestedManyWithoutReponsesInput_schema_1 = require("./ResultatCreateNestedManyWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    text_reponse: zod_1.z.string(),
    score_reponse: zod_1.z.number(),
    resultats: zod_1.z
        .lazy(() => ResultatCreateNestedManyWithoutReponsesInput_schema_1.ResultatCreateNestedManyWithoutReponsesInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseCreateWithoutQuestionsInputObjectSchema = Schema;
