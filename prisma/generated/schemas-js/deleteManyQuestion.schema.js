"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDeleteManySchema = void 0;
const zod_1 = require("zod");
const QuestionWhereInput_schema_1 = require("./objects/QuestionWhereInput.schema");
exports.QuestionDeleteManySchema = zod_1.z.object({
    where: QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema.optional(),
});
