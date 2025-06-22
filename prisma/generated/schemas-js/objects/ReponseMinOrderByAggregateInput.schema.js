"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    text_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    score_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.ReponseMinOrderByAggregateInputObjectSchema = Schema;
