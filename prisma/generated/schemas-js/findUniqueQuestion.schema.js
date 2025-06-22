"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionFindUniqueSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./objects/QuestionWhereUniqueInput.schema");
exports.QuestionFindUniqueSchema = zod_1.z.object({
    where: QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema,
});
