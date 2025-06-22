"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpsertSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./objects/QuestionWhereUniqueInput.schema");
const QuestionCreateInput_schema_1 = require("./objects/QuestionCreateInput.schema");
const QuestionUncheckedCreateInput_schema_1 = require("./objects/QuestionUncheckedCreateInput.schema");
const QuestionUpdateInput_schema_1 = require("./objects/QuestionUpdateInput.schema");
const QuestionUncheckedUpdateInput_schema_1 = require("./objects/QuestionUncheckedUpdateInput.schema");
exports.QuestionUpsertSchema = zod_1.z.object({
    where: QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        QuestionCreateInput_schema_1.QuestionCreateInputObjectSchema,
        QuestionUncheckedCreateInput_schema_1.QuestionUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        QuestionUpdateInput_schema_1.QuestionUpdateInputObjectSchema,
        QuestionUncheckedUpdateInput_schema_1.QuestionUncheckedUpdateInputObjectSchema,
    ]),
});
