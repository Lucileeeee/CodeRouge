"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateManySchema = void 0;
const zod_1 = require("zod");
const ReponseCreateManyInput_schema_1 = require("./objects/ReponseCreateManyInput.schema");
exports.ReponseCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        ReponseCreateManyInput_schema_1.ReponseCreateManyInputObjectSchema,
        zod_1.z.array(ReponseCreateManyInput_schema_1.ReponseCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
