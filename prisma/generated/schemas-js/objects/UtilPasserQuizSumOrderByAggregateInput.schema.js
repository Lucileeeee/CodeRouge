"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizSumOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.UtilPasserQuizSumOrderByAggregateInputObjectSchema = Schema;
