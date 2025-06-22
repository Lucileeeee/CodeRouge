"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateManyJoueurInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateManyJoueurInput_schema_1 = require("./UtilResultatCreateManyJoueurInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatCreateManyJoueurInput_schema_1.UtilResultatCreateManyJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatCreateManyJoueurInput_schema_1.UtilResultatCreateManyJoueurInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilResultatCreateManyJoueurInputEnvelopeObjectSchema = Schema;
