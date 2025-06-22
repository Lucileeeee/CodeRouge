"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateOneSchema = void 0;
const zod_1 = require("zod");
const QuizUpdateInput_schema_1 = require("./objects/QuizUpdateInput.schema");
const QuizUncheckedUpdateInput_schema_1 = require("./objects/QuizUncheckedUpdateInput.schema");
const QuizWhereUniqueInput_schema_1 = require("./objects/QuizWhereUniqueInput.schema");
exports.QuizUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        QuizUpdateInput_schema_1.QuizUpdateInputObjectSchema,
        QuizUncheckedUpdateInput_schema_1.QuizUncheckedUpdateInputObjectSchema,
    ]),
    where: QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema,
});
