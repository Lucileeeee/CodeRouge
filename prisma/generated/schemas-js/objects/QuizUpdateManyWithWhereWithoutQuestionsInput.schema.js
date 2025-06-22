"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateManyWithWhereWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizScalarWhereInput_schema_1 = require("./QuizScalarWhereInput.schema");
const QuizUpdateManyMutationInput_schema_1 = require("./QuizUpdateManyMutationInput.schema");
const QuizUncheckedUpdateManyWithoutQuizsInput_schema_1 = require("./QuizUncheckedUpdateManyWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizScalarWhereInput_schema_1.QuizScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateManyMutationInput_schema_1.QuizUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateManyWithoutQuizsInput_schema_1.QuizUncheckedUpdateManyWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpdateManyWithWhereWithoutQuestionsInputObjectSchema = Schema;
