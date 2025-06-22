"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ResultatCountOrderByAggregateInput_schema_1 = require("./ResultatCountOrderByAggregateInput.schema");
const ResultatAvgOrderByAggregateInput_schema_1 = require("./ResultatAvgOrderByAggregateInput.schema");
const ResultatMaxOrderByAggregateInput_schema_1 = require("./ResultatMaxOrderByAggregateInput.schema");
const ResultatMinOrderByAggregateInput_schema_1 = require("./ResultatMinOrderByAggregateInput.schema");
const ResultatSumOrderByAggregateInput_schema_1 = require("./ResultatSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_min: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_max: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => ResultatCountOrderByAggregateInput_schema_1.ResultatCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => ResultatAvgOrderByAggregateInput_schema_1.ResultatAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => ResultatMaxOrderByAggregateInput_schema_1.ResultatMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => ResultatMinOrderByAggregateInput_schema_1.ResultatMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => ResultatSumOrderByAggregateInput_schema_1.ResultatSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.ResultatOrderByWithAggregationInputObjectSchema = Schema;
