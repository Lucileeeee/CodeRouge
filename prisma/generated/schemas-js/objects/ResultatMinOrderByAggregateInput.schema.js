"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_min: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_max: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.ResultatMinOrderByAggregateInputObjectSchema = Schema;
