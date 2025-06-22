"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpdateManySchema = void 0;
const zod_1 = require("zod");
const QuizUpdateManyMutationInput_schema_1 = require("./objects/QuizUpdateManyMutationInput.schema");
const QuizWhereInput_schema_1 = require("./objects/QuizWhereInput.schema");
exports.QuizUpdateManySchema = zod_1.z.object({
    data: QuizUpdateManyMutationInput_schema_1.QuizUpdateManyMutationInputObjectSchema,
    where: QuizWhereInput_schema_1.QuizWhereInputObjectSchema.optional(),
});
