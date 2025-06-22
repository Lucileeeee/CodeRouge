"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilResultatCountOrderByAggregateInput_schema_1 = require("./UtilResultatCountOrderByAggregateInput.schema");
const UtilResultatAvgOrderByAggregateInput_schema_1 = require("./UtilResultatAvgOrderByAggregateInput.schema");
const UtilResultatMaxOrderByAggregateInput_schema_1 = require("./UtilResultatMaxOrderByAggregateInput.schema");
const UtilResultatMinOrderByAggregateInput_schema_1 = require("./UtilResultatMinOrderByAggregateInput.schema");
const UtilResultatSumOrderByAggregateInput_schema_1 = require("./UtilResultatSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultatId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => UtilResultatCountOrderByAggregateInput_schema_1.UtilResultatCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => UtilResultatAvgOrderByAggregateInput_schema_1.UtilResultatAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => UtilResultatMaxOrderByAggregateInput_schema_1.UtilResultatMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => UtilResultatMinOrderByAggregateInput_schema_1.UtilResultatMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => UtilResultatSumOrderByAggregateInput_schema_1.UtilResultatSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilResultatOrderByWithAggregationInputObjectSchema = Schema;
