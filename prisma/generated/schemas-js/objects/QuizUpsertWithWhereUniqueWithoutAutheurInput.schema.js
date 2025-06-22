"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpsertWithWhereUniqueWithoutAutheurInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizUpdateWithoutAutheurInput_schema_1 = require("./QuizUpdateWithoutAutheurInput.schema");
const QuizUncheckedUpdateWithoutAutheurInput_schema_1 = require("./QuizUncheckedUpdateWithoutAutheurInput.schema");
const QuizCreateWithoutAutheurInput_schema_1 = require("./QuizCreateWithoutAutheurInput.schema");
const QuizUncheckedCreateWithoutAutheurInput_schema_1 = require("./QuizUncheckedCreateWithoutAutheurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuizUpdateWithoutAutheurInput_schema_1.QuizUpdateWithoutAutheurInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedUpdateWithoutAutheurInput_schema_1.QuizUncheckedUpdateWithoutAutheurInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutAutheurInput_schema_1.QuizCreateWithoutAutheurInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutAutheurInput_schema_1.QuizUncheckedCreateWithoutAutheurInputObjectSchema),
    ]),
})
    .strict();
exports.QuizUpsertWithWhereUniqueWithoutAutheurInputObjectSchema = Schema;
