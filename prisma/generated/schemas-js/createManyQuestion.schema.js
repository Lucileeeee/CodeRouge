"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateManySchema = void 0;
const zod_1 = require("zod");
const QuestionCreateManyInput_schema_1 = require("./objects/QuestionCreateManyInput.schema");
exports.QuestionCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        QuestionCreateManyInput_schema_1.QuestionCreateManyInputObjectSchema,
        zod_1.z.array(QuestionCreateManyInput_schema_1.QuestionCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
