"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateManySchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateManyInput_schema_1 = require("./objects/UtilResultatCreateManyInput.schema");
exports.UtilResultatCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilResultatCreateManyInput_schema_1.UtilResultatCreateManyInputObjectSchema,
        zod_1.z.array(UtilResultatCreateManyInput_schema_1.UtilResultatCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
