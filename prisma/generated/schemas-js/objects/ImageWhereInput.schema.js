"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const QuestionRelationFilter_schema_1 = require("./QuestionRelationFilter.schema");
const QuestionWhereInput_schema_1 = require("./QuestionWhereInput.schema");
const ResultatRelationFilter_schema_1 = require("./ResultatRelationFilter.schema");
const ResultatWhereInput_schema_1 = require("./ResultatWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ImageWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ImageWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ImageWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()]).optional(),
    url: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    prompt: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    question: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionRelationFilter_schema_1.QuestionRelationFilterObjectSchema),
        zod_1.z.lazy(() => QuestionWhereInput_schema_1.QuestionWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    resultat: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatRelationFilter_schema_1.ResultatRelationFilterObjectSchema),
        zod_1.z.lazy(() => ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.ImageWhereInputObjectSchema = Schema;
