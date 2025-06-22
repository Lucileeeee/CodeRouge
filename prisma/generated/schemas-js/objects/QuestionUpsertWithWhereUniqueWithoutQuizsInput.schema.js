"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpsertWithWhereUniqueWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithoutQuizsInput_schema_1 = require("./QuestionUpdateWithoutQuizsInput.schema");
const QuestionUncheckedUpdateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedUpdateWithoutQuizsInput.schema");
const QuestionCreateWithoutQuizsInput_schema_1 = require("./QuestionCreateWithoutQuizsInput.schema");
const QuestionUncheckedCreateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedCreateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuestionUpdateWithoutQuizsInput_schema_1.QuestionUpdateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateWithoutQuizsInput_schema_1.QuestionUncheckedUpdateWithoutQuizsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutQuizsInput_schema_1.QuestionCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutQuizsInput_schema_1.QuestionUncheckedCreateWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionUpsertWithWhereUniqueWithoutQuizsInputObjectSchema = Schema;
