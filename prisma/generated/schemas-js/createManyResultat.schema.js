"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateManySchema = void 0;
const zod_1 = require("zod");
const ResultatCreateManyInput_schema_1 = require("./objects/ResultatCreateManyInput.schema");
exports.ResultatCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        ResultatCreateManyInput_schema_1.ResultatCreateManyInputObjectSchema,
        zod_1.z.array(ResultatCreateManyInput_schema_1.ResultatCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
