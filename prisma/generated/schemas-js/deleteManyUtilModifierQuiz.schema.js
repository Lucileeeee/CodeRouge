"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizDeleteManySchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereInput_schema_1 = require("./objects/UtilModifierQuizWhereInput.schema");
exports.UtilModifierQuizDeleteManySchema = zod_1.z.object({
    where: UtilModifierQuizWhereInput_schema_1.UtilModifierQuizWhereInputObjectSchema.optional(),
});
