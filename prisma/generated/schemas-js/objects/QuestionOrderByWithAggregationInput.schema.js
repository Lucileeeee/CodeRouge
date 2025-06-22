"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const QuestionCountOrderByAggregateInput_schema_1 = require("./QuestionCountOrderByAggregateInput.schema");
const QuestionAvgOrderByAggregateInput_schema_1 = require("./QuestionAvgOrderByAggregateInput.schema");
const QuestionMaxOrderByAggregateInput_schema_1 = require("./QuestionMaxOrderByAggregateInput.schema");
const QuestionMinOrderByAggregateInput_schema_1 = require("./QuestionMinOrderByAggregateInput.schema");
const QuestionSumOrderByAggregateInput_schema_1 = require("./QuestionSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    text: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    signalement: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    disponible: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => QuestionCountOrderByAggregateInput_schema_1.QuestionCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => QuestionAvgOrderByAggregateInput_schema_1.QuestionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => QuestionMaxOrderByAggregateInput_schema_1.QuestionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => QuestionMinOrderByAggregateInput_schema_1.QuestionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => QuestionSumOrderByAggregateInput_schema_1.QuestionSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.QuestionOrderByWithAggregationInputObjectSchema = Schema;
