"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpsertSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereUniqueInput_schema_1 = require("./objects/ResultatWhereUniqueInput.schema");
const ResultatCreateInput_schema_1 = require("./objects/ResultatCreateInput.schema");
const ResultatUncheckedCreateInput_schema_1 = require("./objects/ResultatUncheckedCreateInput.schema");
const ResultatUpdateInput_schema_1 = require("./objects/ResultatUpdateInput.schema");
const ResultatUncheckedUpdateInput_schema_1 = require("./objects/ResultatUncheckedUpdateInput.schema");
exports.ResultatUpsertSchema = zod_1.z.object({
    where: ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        ResultatCreateInput_schema_1.ResultatCreateInputObjectSchema,
        ResultatUncheckedCreateInput_schema_1.ResultatUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        ResultatUpdateInput_schema_1.ResultatUpdateInputObjectSchema,
        ResultatUncheckedUpdateInput_schema_1.ResultatUncheckedUpdateInputObjectSchema,
    ]),
});
