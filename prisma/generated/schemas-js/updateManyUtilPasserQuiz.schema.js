"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateManySchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizUpdateManyMutationInput_schema_1 = require("./objects/UtilPasserQuizUpdateManyMutationInput.schema");
const UtilPasserQuizWhereInput_schema_1 = require("./objects/UtilPasserQuizWhereInput.schema");
exports.UtilPasserQuizUpdateManySchema = zod_1.z.object({
    data: UtilPasserQuizUpdateManyMutationInput_schema_1.UtilPasserQuizUpdateManyMutationInputObjectSchema,
    where: UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema.optional(),
});
