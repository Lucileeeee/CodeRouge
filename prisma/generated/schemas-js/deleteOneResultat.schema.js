"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatDeleteOneSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereUniqueInput_schema_1 = require("./objects/ResultatWhereUniqueInput.schema");
exports.ResultatDeleteOneSchema = zod_1.z.object({
    where: ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema,
});
