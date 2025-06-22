"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatDeleteManySchema = void 0;
const zod_1 = require("zod");
const ResultatWhereInput_schema_1 = require("./objects/ResultatWhereInput.schema");
exports.ResultatDeleteManySchema = zod_1.z.object({
    where: ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema.optional(),
});
