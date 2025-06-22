"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatDeleteManySchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereInput_schema_1 = require("./objects/UtilResultatWhereInput.schema");
exports.UtilResultatDeleteManySchema = zod_1.z.object({
    where: UtilResultatWhereInput_schema_1.UtilResultatWhereInputObjectSchema.optional(),
});
