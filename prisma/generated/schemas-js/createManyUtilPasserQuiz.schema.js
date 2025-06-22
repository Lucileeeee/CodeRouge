"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateManySchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateManyInput_schema_1 = require("./objects/UtilPasserQuizCreateManyInput.schema");
exports.UtilPasserQuizCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilPasserQuizCreateManyInput_schema_1.UtilPasserQuizCreateManyInputObjectSchema,
        zod_1.z.array(UtilPasserQuizCreateManyInput_schema_1.UtilPasserQuizCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
