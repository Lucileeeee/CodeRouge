"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UtilisateurOrderByWithRelationInput_schema_1 = require("./UtilisateurOrderByWithRelationInput.schema");
const ResultatOrderByWithRelationInput_schema_1 = require("./ResultatOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    joueurId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultatId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    joueur: zod_1.z
        .lazy(() => UtilisateurOrderByWithRelationInput_schema_1.UtilisateurOrderByWithRelationInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilResultatOrderByWithRelationInputObjectSchema = Schema;
