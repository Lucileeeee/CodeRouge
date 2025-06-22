"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ImageOrderByWithRelationInput_schema_1 = require("./ImageOrderByWithRelationInput.schema");
const ReponseOrderByRelationAggregateInput_schema_1 = require("./ReponseOrderByRelationAggregateInput.schema");
const UtilResultatOrderByRelationAggregateInput_schema_1 = require("./UtilResultatOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    titre: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_min: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultat_score_max: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema).optional(),
    reponses: zod_1.z
        .lazy(() => ReponseOrderByRelationAggregateInput_schema_1.ReponseOrderByRelationAggregateInputObjectSchema)
        .optional(),
    utilisateurs: zod_1.z
        .lazy(() => UtilResultatOrderByRelationAggregateInput_schema_1.UtilResultatOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.ResultatOrderByWithRelationInputObjectSchema = Schema;
