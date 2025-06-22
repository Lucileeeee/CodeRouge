"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilisateurCountOrderByAggregateInput_schema_1 = require("./UtilisateurCountOrderByAggregateInput.schema");
const UtilisateurAvgOrderByAggregateInput_schema_1 = require("./UtilisateurAvgOrderByAggregateInput.schema");
const UtilisateurMaxOrderByAggregateInput_schema_1 = require("./UtilisateurMaxOrderByAggregateInput.schema");
const UtilisateurMinOrderByAggregateInput_schema_1 = require("./UtilisateurMinOrderByAggregateInput.schema");
const UtilisateurSumOrderByAggregateInput_schema_1 = require("./UtilisateurSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    nom: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    prenom: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    mdp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => UtilisateurCountOrderByAggregateInput_schema_1.UtilisateurCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => UtilisateurAvgOrderByAggregateInput_schema_1.UtilisateurAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => UtilisateurMaxOrderByAggregateInput_schema_1.UtilisateurMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => UtilisateurMinOrderByAggregateInput_schema_1.UtilisateurMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => UtilisateurSumOrderByAggregateInput_schema_1.UtilisateurSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilisateurOrderByWithAggregationInputObjectSchema = Schema;
