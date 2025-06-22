"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateManyJoueurInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateManyJoueurInput_schema_1 = require("./UtilPasserQuizCreateManyJoueurInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizCreateManyJoueurInput_schema_1.UtilPasserQuizCreateManyJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizCreateManyJoueurInput_schema_1.UtilPasserQuizCreateManyJoueurInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilPasserQuizCreateManyJoueurInputEnvelopeObjectSchema = Schema;
