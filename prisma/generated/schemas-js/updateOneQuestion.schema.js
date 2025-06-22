"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpdateOneSchema = void 0;
const zod_1 = require("zod");
const QuestionUpdateInput_schema_1 = require("./objects/QuestionUpdateInput.schema");
const QuestionUncheckedUpdateInput_schema_1 = require("./objects/QuestionUncheckedUpdateInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./objects/QuestionWhereUniqueInput.schema");
exports.QuestionUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        QuestionUpdateInput_schema_1.QuestionUpdateInputObjectSchema,
        QuestionUncheckedUpdateInput_schema_1.QuestionUncheckedUpdateInputObjectSchema,
    ]),
    where: QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema,
});
