"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const QuizOrderByRelationAggregateInput_schema_1 = require("./QuizOrderByRelationAggregateInput.schema");
const ReponseOrderByRelationAggregateInput_schema_1 = require("./ReponseOrderByRelationAggregateInput.schema");
const ImageOrderByWithRelationInput_schema_1 = require("./ImageOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    text: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    signalement: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    disponible: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quizs: zod_1.z
        .lazy(() => QuizOrderByRelationAggregateInput_schema_1.QuizOrderByRelationAggregateInputObjectSchema)
        .optional(),
    reponses: zod_1.z
        .lazy(() => ReponseOrderByRelationAggregateInput_schema_1.ReponseOrderByRelationAggregateInputObjectSchema)
        .optional(),
    image: zod_1.z.lazy(() => ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.QuestionOrderByWithRelationInputObjectSchema = Schema;
