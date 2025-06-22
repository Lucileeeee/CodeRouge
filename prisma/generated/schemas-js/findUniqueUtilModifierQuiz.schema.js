"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizFindUniqueSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./objects/UtilModifierQuizWhereUniqueInput.schema");
exports.UtilModifierQuizFindUniqueSchema = zod_1.z.object({
    where: UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema,
});
