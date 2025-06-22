"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateOrConnectWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionCreateWithoutReponsesInput_schema_1 = require("./QuestionCreateWithoutReponsesInput.schema");
const QuestionUncheckedCreateWithoutReponsesInput_schema_1 = require("./QuestionUncheckedCreateWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutReponsesInput_schema_1.QuestionCreateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutReponsesInput_schema_1.QuestionUncheckedCreateWithoutReponsesInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionCreateOrConnectWithoutReponsesInputObjectSchema = Schema;
