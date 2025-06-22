"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateOrConnectWithoutQuizsInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionCreateWithoutQuizsInput_schema_1 = require("./QuestionCreateWithoutQuizsInput.schema");
const QuestionUncheckedCreateWithoutQuizsInput_schema_1 = require("./QuestionUncheckedCreateWithoutQuizsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutQuizsInput_schema_1.QuestionCreateWithoutQuizsInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutQuizsInput_schema_1.QuestionUncheckedCreateWithoutQuizsInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionCreateOrConnectWithoutQuizsInputObjectSchema = Schema;
