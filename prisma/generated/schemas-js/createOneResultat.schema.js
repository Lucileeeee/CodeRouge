"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateOneSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateInput_schema_1 = require("./objects/ResultatCreateInput.schema");
const ResultatUncheckedCreateInput_schema_1 = require("./objects/ResultatUncheckedCreateInput.schema");
exports.ResultatCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ResultatCreateInput_schema_1.ResultatCreateInputObjectSchema,
        ResultatUncheckedCreateInput_schema_1.ResultatUncheckedCreateInputObjectSchema,
    ]),
});
