"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateManySchema = void 0;
const zod_1 = require("zod");
const ResultatUpdateManyMutationInput_schema_1 = require("./objects/ResultatUpdateManyMutationInput.schema");
const ResultatWhereInput_schema_1 = require("./objects/ResultatWhereInput.schema");
exports.ResultatUpdateManySchema = zod_1.z.object({
    data: ResultatUpdateManyMutationInput_schema_1.ResultatUpdateManyMutationInputObjectSchema,
    where: ResultatWhereInput_schema_1.ResultatWhereInputObjectSchema.optional(),
});
