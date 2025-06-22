"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilPasserQuizCountOrderByAggregateInput_schema_1 = require("./UtilPasserQuizCountOrderByAggregateInput.schema");
const UtilPasserQuizAvgOrderByAggregateInput_schema_1 = require("./UtilPasserQuizAvgOrderByAggregateInput.schema");
const UtilPasserQuizMaxOrderByAggregateInput_schema_1 = require("./UtilPasserQuizMaxOrderByAggregateInput.schema");
const UtilPasserQuizMinOrderByAggregateInput_schema_1 = require("./UtilPasserQuizMinOrderByAggregateInput.schema");
const UtilPasserQuizSumOrderByAggregateInput_schema_1 = require("./UtilPasserQuizSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => UtilPasserQuizCountOrderByAggregateInput_schema_1.UtilPasserQuizCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => UtilPasserQuizAvgOrderByAggregateInput_schema_1.UtilPasserQuizAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => UtilPasserQuizMaxOrderByAggregateInput_schema_1.UtilPasserQuizMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => UtilPasserQuizMinOrderByAggregateInput_schema_1.UtilPasserQuizMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => UtilPasserQuizSumOrderByAggregateInput_schema_1.UtilPasserQuizSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilPasserQuizOrderByWithAggregationInputObjectSchema = Schema;
