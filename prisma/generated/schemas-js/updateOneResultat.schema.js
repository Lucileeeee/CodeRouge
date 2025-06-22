"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateOneSchema = void 0;
const zod_1 = require("zod");
const ResultatUpdateInput_schema_1 = require("./objects/ResultatUpdateInput.schema");
const ResultatUncheckedUpdateInput_schema_1 = require("./objects/ResultatUncheckedUpdateInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./objects/ResultatWhereUniqueInput.schema");
exports.ResultatUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ResultatUpdateInput_schema_1.ResultatUpdateInputObjectSchema,
        ResultatUncheckedUpdateInput_schema_1.ResultatUncheckedUpdateInputObjectSchema,
    ]),
    where: ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema,
});
