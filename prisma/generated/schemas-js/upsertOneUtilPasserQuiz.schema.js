"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpsertSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./objects/UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizCreateInput_schema_1 = require("./objects/UtilPasserQuizCreateInput.schema");
const UtilPasserQuizUncheckedCreateInput_schema_1 = require("./objects/UtilPasserQuizUncheckedCreateInput.schema");
const UtilPasserQuizUpdateInput_schema_1 = require("./objects/UtilPasserQuizUpdateInput.schema");
const UtilPasserQuizUncheckedUpdateInput_schema_1 = require("./objects/UtilPasserQuizUncheckedUpdateInput.schema");
exports.UtilPasserQuizUpsertSchema = zod_1.z.object({
    where: UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        UtilPasserQuizCreateInput_schema_1.UtilPasserQuizCreateInputObjectSchema,
        UtilPasserQuizUncheckedCreateInput_schema_1.UtilPasserQuizUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        UtilPasserQuizUpdateInput_schema_1.UtilPasserQuizUpdateInputObjectSchema,
        UtilPasserQuizUncheckedUpdateInput_schema_1.UtilPasserQuizUncheckedUpdateInputObjectSchema,
    ]),
});
