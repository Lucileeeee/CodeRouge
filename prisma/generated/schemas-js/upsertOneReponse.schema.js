"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpsertSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./objects/ReponseWhereUniqueInput.schema");
const ReponseCreateInput_schema_1 = require("./objects/ReponseCreateInput.schema");
const ReponseUncheckedCreateInput_schema_1 = require("./objects/ReponseUncheckedCreateInput.schema");
const ReponseUpdateInput_schema_1 = require("./objects/ReponseUpdateInput.schema");
const ReponseUncheckedUpdateInput_schema_1 = require("./objects/ReponseUncheckedUpdateInput.schema");
exports.ReponseUpsertSchema = zod_1.z.object({
    where: ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        ReponseCreateInput_schema_1.ReponseCreateInputObjectSchema,
        ReponseUncheckedCreateInput_schema_1.ReponseUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        ReponseUpdateInput_schema_1.ReponseUpdateInputObjectSchema,
        ReponseUncheckedUpdateInput_schema_1.ReponseUncheckedUpdateInputObjectSchema,
    ]),
});
