"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const QuestionOrderByWithRelationInput_schema_1 = require("./QuestionOrderByWithRelationInput.schema");
const ResultatOrderByWithRelationInput_schema_1 = require("./ResultatOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    prompt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    question: zod_1.z
        .lazy(() => QuestionOrderByWithRelationInput_schema_1.QuestionOrderByWithRelationInputObjectSchema)
        .optional(),
    resultat: zod_1.z
        .lazy(() => ResultatOrderByWithRelationInput_schema_1.ResultatOrderByWithRelationInputObjectSchema)
        .optional(),
})
    .strict();
exports.ImageOrderByWithRelationInputObjectSchema = Schema;
