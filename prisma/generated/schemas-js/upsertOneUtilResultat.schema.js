"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpsertSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./objects/UtilResultatWhereUniqueInput.schema");
const UtilResultatCreateInput_schema_1 = require("./objects/UtilResultatCreateInput.schema");
const UtilResultatUncheckedCreateInput_schema_1 = require("./objects/UtilResultatUncheckedCreateInput.schema");
const UtilResultatUpdateInput_schema_1 = require("./objects/UtilResultatUpdateInput.schema");
const UtilResultatUncheckedUpdateInput_schema_1 = require("./objects/UtilResultatUncheckedUpdateInput.schema");
exports.UtilResultatUpsertSchema = zod_1.z.object({
    where: UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        UtilResultatCreateInput_schema_1.UtilResultatCreateInputObjectSchema,
        UtilResultatUncheckedCreateInput_schema_1.UtilResultatUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        UtilResultatUpdateInput_schema_1.UtilResultatUpdateInputObjectSchema,
        UtilResultatUncheckedUpdateInput_schema_1.UtilResultatUncheckedUpdateInputObjectSchema,
    ]),
});
