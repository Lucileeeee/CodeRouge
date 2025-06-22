"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateManyAutheurInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const QuizCreateManyAutheurInput_schema_1 = require("./QuizCreateManyAutheurInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => QuizCreateManyAutheurInput_schema_1.QuizCreateManyAutheurInputObjectSchema),
        zod_1.z.lazy(() => QuizCreateManyAutheurInput_schema_1.QuizCreateManyAutheurInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.QuizCreateManyAutheurInputEnvelopeObjectSchema = Schema;
