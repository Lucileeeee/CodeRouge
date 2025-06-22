"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateManySchema = void 0;
const zod_1 = require("zod");
const QuizCreateManyInput_schema_1 = require("./objects/QuizCreateManyInput.schema");
exports.QuizCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        QuizCreateManyInput_schema_1.QuizCreateManyInputObjectSchema,
        zod_1.z.array(QuizCreateManyInput_schema_1.QuizCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
