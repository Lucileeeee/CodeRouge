"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereInput_schema_1 = require("./UtilPasserQuizWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema).optional(),
})
    .strict();
exports.UtilPasserQuizListRelationFilterObjectSchema = Schema;
