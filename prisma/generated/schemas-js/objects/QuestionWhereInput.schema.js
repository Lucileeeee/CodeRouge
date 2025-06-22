"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const QuizListRelationFilter_schema_1 = require("./QuizListRelationFilter.schema");
const ReponseListRelationFilter_schema_1 = require("./ReponseListRelationFilter.schema");
const ImageRelationFilter_schema_1 = require("./ImageRelationFilter.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuestionWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuestionWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.QuestionWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.QuestionWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.QuestionWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    text: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    signalement: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    disponible: zod_1.z
        .union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema), zod_1.z.boolean()])
        .optional(),
    imageId: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    quizs: zod_1.z.lazy(() => QuizListRelationFilter_schema_1.QuizListRelationFilterObjectSchema).optional(),
    reponses: zod_1.z.lazy(() => ReponseListRelationFilter_schema_1.ReponseListRelationFilterObjectSchema).optional(),
    image: zod_1.z
        .union([
        zod_1.z.lazy(() => ImageRelationFilter_schema_1.ImageRelationFilterObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.QuestionWhereInputObjectSchema = Schema;
