"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateWithWhereUniqueWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithoutQuizsInput_schema_1 = require("./QuestionUpdateWithoutQuizsInput.schema");
const QuestionUncheckedUpdateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedUpdateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuestionUpdateWithoutQuizsInput_schema_1.QuestionUpdateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateWithoutQuizsInput_schema_1.QuestionUncheckedUpdateWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionUpdateWithWhereUniqueWithoutQuizsInputObjectSchema = Schema;
