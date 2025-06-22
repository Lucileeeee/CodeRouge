"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateOrConnectWithoutJoueursInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./QuizWhereUniqueInput.schema");
const QuizCreateWithoutJoueursInput_schema_1 = require("./QuizCreateWithoutJoueursInput.schema");
const QuizUncheckedCreateWithoutJoueursInput_schema_1 = require("./QuizUncheckedCreateWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateWithoutJoueursInput_schema_1.QuizCreateWithoutJoueursInputObjectSchema),
        zod_1.z.lazy(() => QuizUncheckedCreateWithoutJoueursInput_schema_1.QuizUncheckedCreateWithoutJoueursInputObjectSchema),
    ]),
})
    .strict();
exports.QuizCreateOrConnectWithoutJoueursInputObjectSchema = Schema;
