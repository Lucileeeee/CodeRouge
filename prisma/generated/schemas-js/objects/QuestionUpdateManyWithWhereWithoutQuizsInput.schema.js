"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateManyWithWhereWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionScalarWhereInput_schema_1 = require("./QuestionScalarWhereInput.schema");
const QuestionUpdateManyMutationInput_schema_1 = require("./QuestionUpdateManyMutationInput.schema");
const QuestionUncheckedUpdateManyWithoutQuestionsInput_schema_1 = require("./QuestionUncheckedUpdateManyWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionScalarWhereInput_schema_1.QuestionScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuestionUpdateManyMutationInput_schema_1.QuestionUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateManyWithoutQuestionsInput_schema_1.QuestionUncheckedUpdateManyWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionUpdateManyWithWhereWithoutQuizsInputObjectSchema = Schema;
