"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilModifierQuizCountOrderByAggregateInput_schema_1 = require("./UtilModifierQuizCountOrderByAggregateInput.schema");
const UtilModifierQuizAvgOrderByAggregateInput_schema_1 = require("./UtilModifierQuizAvgOrderByAggregateInput.schema");
const UtilModifierQuizMaxOrderByAggregateInput_schema_1 = require("./UtilModifierQuizMaxOrderByAggregateInput.schema");
const UtilModifierQuizMinOrderByAggregateInput_schema_1 = require("./UtilModifierQuizMinOrderByAggregateInput.schema");
const UtilModifierQuizSumOrderByAggregateInput_schema_1 = require("./UtilModifierQuizSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    utilisateurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => UtilModifierQuizCountOrderByAggregateInput_schema_1.UtilModifierQuizCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => UtilModifierQuizAvgOrderByAggregateInput_schema_1.UtilModifierQuizAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => UtilModifierQuizMaxOrderByAggregateInput_schema_1.UtilModifierQuizMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => UtilModifierQuizMinOrderByAggregateInput_schema_1.UtilModifierQuizMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => UtilModifierQuizSumOrderByAggregateInput_schema_1.UtilModifierQuizSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilModifierQuizOrderByWithAggregationInputObjectSchema = Schema;
