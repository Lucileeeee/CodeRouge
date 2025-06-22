"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ReponseCountOrderByAggregateInput_schema_1 = require("./ReponseCountOrderByAggregateInput.schema");
const ReponseAvgOrderByAggregateInput_schema_1 = require("./ReponseAvgOrderByAggregateInput.schema");
const ReponseMaxOrderByAggregateInput_schema_1 = require("./ReponseMaxOrderByAggregateInput.schema");
const ReponseMinOrderByAggregateInput_schema_1 = require("./ReponseMinOrderByAggregateInput.schema");
const ReponseSumOrderByAggregateInput_schema_1 = require("./ReponseSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    text_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    score_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => ReponseCountOrderByAggregateInput_schema_1.ReponseCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => ReponseAvgOrderByAggregateInput_schema_1.ReponseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => ReponseMaxOrderByAggregateInput_schema_1.ReponseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => ReponseMinOrderByAggregateInput_schema_1.ReponseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => ReponseSumOrderByAggregateInput_schema_1.ReponseSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.ReponseOrderByWithAggregationInputObjectSchema = Schema;
