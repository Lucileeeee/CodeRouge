"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateWithWhereUniqueWithoutAutheurInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutAutheurInput_schema_1 = require("./QuizUpdateWithoutAutheurInput.schema");
const QuizUncheckedUpdateWithoutAutheurInput_schema_1 = require("./QuizUncheckedUpdateWithoutAutheurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutAutheurInput_schema_1.QuizUpdateWithoutAutheurInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutAutheurInput_schema_1.QuizUncheckedUpdateWithoutAutheurInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpdateWithWhereUniqueWithoutAutheurInputObjectSchema = Schema;
