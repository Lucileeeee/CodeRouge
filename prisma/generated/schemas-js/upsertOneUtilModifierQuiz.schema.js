"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpsertSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./objects/UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizCreateInput_schema_1 = require("./objects/UtilModifierQuizCreateInput.schema");
const UtilModifierQuizUncheckedCreateInput_schema_1 = require("./objects/UtilModifierQuizUncheckedCreateInput.schema");
const UtilModifierQuizUpdateInput_schema_1 = require("./objects/UtilModifierQuizUpdateInput.schema");
const UtilModifierQuizUncheckedUpdateInput_schema_1 = require("./objects/UtilModifierQuizUncheckedUpdateInput.schema");
exports.UtilModifierQuizUpsertSchema = zod_1.z.object({
    where: UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        UtilModifierQuizCreateInput_schema_1.UtilModifierQuizCreateInputObjectSchema,
        UtilModifierQuizUncheckedCreateInput_schema_1.UtilModifierQuizUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        UtilModifierQuizUpdateInput_schema_1.UtilModifierQuizUpdateInputObjectSchema,
        UtilModifierQuizUncheckedUpdateInput_schema_1.UtilModifierQuizUncheckedUpdateInputObjectSchema,
    ]),
});
