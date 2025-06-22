"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizDeleteManySchema = void 0;
const zod_1 = require("zod");
const QuizWhereInput_schema_1 = require("./objects/QuizWhereInput.schema");
exports.QuizDeleteManySchema = zod_1.z.object({
    where: QuizWhereInput_schema_1.QuizWhereInputObjectSchema.optional(),
});
