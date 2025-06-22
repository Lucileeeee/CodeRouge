"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateOneSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateInput_schema_1 = require("./objects/UtilModifierQuizCreateInput.schema");
const UtilModifierQuizUncheckedCreateInput_schema_1 = require("./objects/UtilModifierQuizUncheckedCreateInput.schema");
exports.UtilModifierQuizCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilModifierQuizCreateInput_schema_1.UtilModifierQuizCreateInputObjectSchema,
        UtilModifierQuizUncheckedCreateInput_schema_1.UtilModifierQuizUncheckedCreateInputObjectSchema,
    ]),
});
