"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUncheckedCreateWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionUncheckedCreateNestedManyWithoutReponsesInput_schema_1 = require("./QuestionUncheckedCreateNestedManyWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    text_reponse: zod_1.z.string(),
    score_reponse: zod_1.z.number(),
    questions: zod_1.z
        .lazy(() => QuestionUncheckedCreateNestedManyWithoutReponsesInput_schema_1.QuestionUncheckedCreateNestedManyWithoutReponsesInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseUncheckedCreateWithoutResultatsInputObjectSchema = Schema;
