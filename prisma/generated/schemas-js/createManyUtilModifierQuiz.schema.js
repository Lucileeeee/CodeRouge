"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateManySchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateManyInput_schema_1 = require("./objects/UtilModifierQuizCreateManyInput.schema");
exports.UtilModifierQuizCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilModifierQuizCreateManyInput_schema_1.UtilModifierQuizCreateManyInputObjectSchema,
        zod_1.z.array(UtilModifierQuizCreateManyInput_schema_1.UtilModifierQuizCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
