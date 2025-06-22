"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateOneSchema = void 0;
const zod_1 = require("zod");
const UtilResultatCreateInput_schema_1 = require("./objects/UtilResultatCreateInput.schema");
const UtilResultatUncheckedCreateInput_schema_1 = require("./objects/UtilResultatUncheckedCreateInput.schema");
exports.UtilResultatCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilResultatCreateInput_schema_1.UtilResultatCreateInputObjectSchema,
        UtilResultatUncheckedCreateInput_schema_1.UtilResultatUncheckedCreateInputObjectSchema,
    ]),
});
