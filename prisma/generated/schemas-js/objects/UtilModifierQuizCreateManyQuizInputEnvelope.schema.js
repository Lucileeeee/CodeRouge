"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateManyQuizInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizCreateManyQuizInput_schema_1 = require("./UtilModifierQuizCreateManyQuizInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizCreateManyQuizInput_schema_1.UtilModifierQuizCreateManyQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizCreateManyQuizInput_schema_1.UtilModifierQuizCreateManyQuizInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilModifierQuizCreateManyQuizInputEnvelopeObjectSchema = Schema;
