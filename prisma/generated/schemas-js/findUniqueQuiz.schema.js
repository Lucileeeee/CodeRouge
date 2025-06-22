"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizFindUniqueSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./objects/QuizWhereUniqueInput.schema");
exports.QuizFindUniqueSchema = zod_1.z.object({
    where: QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema,
});
