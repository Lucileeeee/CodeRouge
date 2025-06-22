"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatFindUniqueSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./objects/UtilResultatWhereUniqueInput.schema");
exports.UtilResultatFindUniqueSchema = zod_1.z.object({
    where: UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema,
});
