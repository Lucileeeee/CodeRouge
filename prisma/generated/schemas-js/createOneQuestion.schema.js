"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateOneSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateInput_schema_1 = require("./objects/QuestionCreateInput.schema");
const QuestionUncheckedCreateInput_schema_1 = require("./objects/QuestionUncheckedCreateInput.schema");
exports.QuestionCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        QuestionCreateInput_schema_1.QuestionCreateInputObjectSchema,
        QuestionUncheckedCreateInput_schema_1.QuestionUncheckedCreateInputObjectSchema,
    ]),
});
