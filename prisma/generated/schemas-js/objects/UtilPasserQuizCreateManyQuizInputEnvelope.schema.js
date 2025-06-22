"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateManyQuizInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateManyQuizInput_schema_1 = require("./UtilPasserQuizCreateManyQuizInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizCreateManyQuizInput_schema_1.UtilPasserQuizCreateManyQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizCreateManyQuizInput_schema_1.UtilPasserQuizCreateManyQuizInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilPasserQuizCreateManyQuizInputEnvelopeObjectSchema = Schema;
