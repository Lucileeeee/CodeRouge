"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizUpsertSchema = void 0;
const zod_1 = require("zod");
const QuizWhereUniqueInput_schema_1 = require("./objects/QuizWhereUniqueInput.schema");
const QuizCreateInput_schema_1 = require("./objects/QuizCreateInput.schema");
const QuizUncheckedCreateInput_schema_1 = require("./objects/QuizUncheckedCreateInput.schema");
const QuizUpdateInput_schema_1 = require("./objects/QuizUpdateInput.schema");
const QuizUncheckedUpdateInput_schema_1 = require("./objects/QuizUncheckedUpdateInput.schema");
exports.QuizUpsertSchema = zod_1.z.object({
    where: QuizWhereUniqueInput_schema_1.QuizWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        QuizCreateInput_schema_1.QuizCreateInputObjectSchema,
        QuizUncheckedCreateInput_schema_1.QuizUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        QuizUpdateInput_schema_1.QuizUpdateInputObjectSchema,
        QuizUncheckedUpdateInput_schema_1.QuizUncheckedUpdateInputObjectSchema,
    ]),
});
