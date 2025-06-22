"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateManyResultatInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateManyResultatInput_schema_1 = require("./UtilResultatCreateManyResultatInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatCreateManyResultatInput_schema_1.UtilResultatCreateManyResultatInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatCreateManyResultatInput_schema_1.UtilResultatCreateManyResultatInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.UtilResultatCreateManyResultatInputEnvelopeObjectSchema = Schema;
