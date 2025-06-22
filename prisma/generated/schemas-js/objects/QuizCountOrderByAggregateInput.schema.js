"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    disponible: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    autheurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.QuizCountOrderByAggregateInputObjectSchema = Schema;
