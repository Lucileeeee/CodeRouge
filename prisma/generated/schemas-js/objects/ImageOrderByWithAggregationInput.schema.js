"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ImageCountOrderByAggregateInput_schema_1 = require("./ImageCountOrderByAggregateInput.schema");
const ImageAvgOrderByAggregateInput_schema_1 = require("./ImageAvgOrderByAggregateInput.schema");
const ImageMaxOrderByAggregateInput_schema_1 = require("./ImageMaxOrderByAggregateInput.schema");
const ImageMinOrderByAggregateInput_schema_1 = require("./ImageMinOrderByAggregateInput.schema");
const ImageSumOrderByAggregateInput_schema_1 = require("./ImageSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    prompt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => ImageCountOrderByAggregateInput_schema_1.ImageCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => ImageAvgOrderByAggregateInput_schema_1.ImageAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => ImageMaxOrderByAggregateInput_schema_1.ImageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => ImageMinOrderByAggregateInput_schema_1.ImageMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => ImageSumOrderByAggregateInput_schema_1.ImageSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.ImageOrderByWithAggregationInputObjectSchema = Schema;
