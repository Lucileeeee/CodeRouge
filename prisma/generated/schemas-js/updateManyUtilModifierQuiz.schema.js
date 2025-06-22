"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpdateManySchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizUpdateManyMutationInput_schema_1 = require("./objects/UtilModifierQuizUpdateManyMutationInput.schema");
const UtilModifierQuizWhereInput_schema_1 = require("./objects/UtilModifierQuizWhereInput.schema");
exports.UtilModifierQuizUpdateManySchema = zod_1.z.object({
    data: UtilModifierQuizUpdateManyMutationInput_schema_1.UtilModifierQuizUpdateManyMutationInputObjectSchema,
    where: UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema.optional(),
});
