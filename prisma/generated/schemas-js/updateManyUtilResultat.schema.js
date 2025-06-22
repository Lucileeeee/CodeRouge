"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateManySchema = void 0;
const zod_1 = require("zod");
const UtilResultatUpdateManyMutationInput_schema_1 = require("./objects/UtilResultatUpdateManyMutationInput.schema");
const UtilResultatWhereInput_schema_1 = require("./objects/UtilResultatWhereInput.schema");
exports.UtilResultatUpdateManySchema = zod_1.z.object({
    data: UtilResultatUpdateManyMutationInput_schema_1.UtilResultatUpdateManyMutationInputObjectSchema,
    where: UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema.optional(),
});
