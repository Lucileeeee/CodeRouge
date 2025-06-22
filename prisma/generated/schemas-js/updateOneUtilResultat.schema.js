"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateOneSchema = void 0;
const zod_1 = require("zod");
const UtilResultatUpdateInput_schema_1 = require("./objects/UtilResultatUpdateInput.schema");
const UtilResultatUncheckedUpdateInput_schema_1 = require("./objects/UtilResultatUncheckedUpdateInput.schema");
const UtilResultatWhereUniqueInput_schema_1 = require("./objects/UtilResultatWhereUniqueInput.schema");
exports.UtilResultatUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilResultatUpdateInput_schema_1.UtilResultatUpdateInputObjectSchema,
        UtilResultatUncheckedUpdateInput_schema_1.UtilResultatUncheckedUpdateInputObjectSchema,
    ]),
    where: UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema,
});
