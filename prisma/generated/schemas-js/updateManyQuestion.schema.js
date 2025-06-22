"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateManySchema = void 0;
const zod_1 = require("zod");
const QuestionUpdateManyMutationInput_schema_1 = require("./objects/QuestionUpdateManyMutationInput.schema");
const QuestionWhereInput_schema_1 = require("./objects/QuestionWhereInput.schema");
exports.QuestionUpdateManySchema = zod_1.z.object({
    data: QuestionUpdateManyMutationInput_schema_1.QuestionUpdateManyMutationInputObjectSchema,
    where: QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema.optional(),
});
