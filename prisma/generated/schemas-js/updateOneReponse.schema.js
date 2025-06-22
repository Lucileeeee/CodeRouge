"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateOneSchema = void 0;
const zod_1 = require("zod");
const ReponseUpdateInput_schema_1 = require("./objects/ReponseUpdateInput.schema");
const ReponseUncheckedUpdateInput_schema_1 = require("./objects/ReponseUncheckedUpdateInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./objects/ReponseWhereUniqueInput.schema");
exports.ReponseUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ReponseUpdateInput_schema_1.ReponseUpdateInputObjectSchema,
        ReponseUncheckedUpdateInput_schema_1.ReponseUncheckedUpdateInputObjectSchema,
    ]),
    where: ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema,
});
