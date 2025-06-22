"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpsertWithWhereUniqueWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithoutReponsesInput_schema_1 = require("./QuestionUpdateWithoutReponsesInput.schema");
const QuestionUncheckedUpdateWithoutReponsesInput_schema_1 = require("./QuestionUncheckedUpdateWithoutReponsesInput.schema");
const QuestionCreateWithoutReponsesInput_schema_1 = require("./QuestionCreateWithoutReponsesInput.schema");
const QuestionUncheckedCreateWithoutReponsesInput_schema_1 = require("./QuestionUncheckedCreateWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuestionUpdateWithoutReponsesInput_schema_1.QuestionUpdateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateWithoutReponsesInput_schema_1.QuestionUncheckedUpdateWithoutReponsesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutReponsesInput_schema_1.QuestionCreateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutReponsesInput_schema_1.QuestionUncheckedCreateWithoutReponsesInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionUpsertWithWhereUniqueWithoutReponsesInputObjectSchema = Schema;
