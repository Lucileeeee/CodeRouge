"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateManySchema = void 0;
const zod_1 = require("zod");
const ReponseUpdateManyMutationInput_schema_1 = require("./objects/ReponseUpdateManyMutationInput.schema");
const ReponseWhereInput_schema_1 = require("./objects/ReponseWhereInput.schema");
exports.ReponseUpdateManySchema = zod_1.z.object({
    data: ReponseUpdateManyMutationInput_schema_1.ReponseUpdateManyMutationInputObjectSchema,
    where: ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema.optional(),
});
