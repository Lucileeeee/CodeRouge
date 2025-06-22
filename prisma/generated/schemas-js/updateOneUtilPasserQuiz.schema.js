"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateOneSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizUpdateInput_schema_1 = require("./objects/UtilPasserQuizUpdateInput.schema");
const UtilPasserQuizUncheckedUpdateInput_schema_1 = require("./objects/UtilPasserQuizUncheckedUpdateInput.schema");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./objects/UtilPasserQuizWhereUniqueInput.schema");
exports.UtilPasserQuizUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilPasserQuizUpdateInput_schema_1.UtilPasserQuizUpdateInputObjectSchema,
        UtilPasserQuizUncheckedUpdateInput_schema_1.UtilPasserQuizUncheckedUpdateInputObjectSchema,
    ]),
    where: UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema,
});
