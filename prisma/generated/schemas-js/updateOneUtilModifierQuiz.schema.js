"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpdateOneSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizUpdateInput_schema_1 = require("./objects/UtilModifierQuizUpdateInput.schema");
const UtilModifierQuizUncheckedUpdateInput_schema_1 = require("./objects/UtilModifierQuizUncheckedUpdateInput.schema");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./objects/UtilModifierQuizWhereUniqueInput.schema");
exports.UtilModifierQuizUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilModifierQuizUpdateInput_schema_1.UtilModifierQuizUpdateInputObjectSchema,
        UtilModifierQuizUncheckedUpdateInput_schema_1.UtilModifierQuizUncheckedUpdateInputObjectSchema,
    ]),
    where: UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema,
});
