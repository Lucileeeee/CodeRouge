"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const QuizCountOrderByAggregateInput_schema_1 = require("./QuizCountOrderByAggregateInput.schema");
const QuizAvgOrderByAggregateInput_schema_1 = require("./QuizAvgOrderByAggregateInput.schema");
const QuizMaxOrderByAggregateInput_schema_1 = require("./QuizMaxOrderByAggregateInput.schema");
const QuizMinOrderByAggregateInput_schema_1 = require("./QuizMinOrderByAggregateInput.schema");
const QuizSumOrderByAggregateInput_schema_1 = require("./QuizSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    disponible: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    autheurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => QuizCountOrderByAggregateInput_schema_1.QuizCountOrderByAggregateInputObjectSchema).optional(),
    _avg: zod_1.z.lazy(() => QuizAvgOrderByAggregateInput_schema_1.QuizAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => QuizMaxOrderByAggregateInput_schema_1.QuizMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => QuizMinOrderByAggregateInput_schema_1.QuizMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => QuizSumOrderByAggregateInput_schema_1.QuizSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.QuizOrderByWithAggregationInputObjectSchema = Schema;
