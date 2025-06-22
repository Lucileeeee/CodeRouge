"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereInput_schema_1 = require("./ResultatWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.ResultatRelationFilterObjectSchema = Schema;
