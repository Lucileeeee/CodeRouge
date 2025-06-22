"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCreateOneSchema = void 0;
const zod_1 = require("zod");
const QuizCreateInput_schema_1 = require("./objects/QuizCreateInput.schema");
const QuizUncheckedCreateInput_schema_1 = require("./objects/QuizUncheckedCreateInput.schema");
exports.QuizCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        QuizCreateInput_schema_1.QuizCreateInputObjectSchema,
        QuizUncheckedCreateInput_schema_1.QuizUncheckedCreateInputObjectSchema,
    ]),
});
