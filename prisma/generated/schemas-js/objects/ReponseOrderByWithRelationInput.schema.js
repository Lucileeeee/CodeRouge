"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ResultatOrderByRelationAggregateInput_schema_1 = require("./ResultatOrderByRelationAggregateInput.schema");
const QuestionOrderByRelationAggregateInput_schema_1 = require("./QuestionOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    text_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    score_reponse: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resultats: zod_1.z
        .lazy(() => ResultatOrderByRelationAggregateInput_schema_1.ResultatOrderByRelationAggregateInputObjectSchema)
        .optional(),
    questions: zod_1.z
        .lazy(() => QuestionOrderByRelationAggregateInput_schema_1.QuestionOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.ReponseOrderByWithRelationInputObjectSchema = Schema;
