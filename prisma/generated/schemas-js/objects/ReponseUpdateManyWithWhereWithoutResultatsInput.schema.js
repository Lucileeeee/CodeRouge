"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateManyWithWhereWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseScalarWhereInput_schema_1 = require("./ReponseScalarWhereInput.schema");
const ReponseUpdateManyMutationInput_schema_1 = require("./ReponseUpdateManyMutationInput.schema");
const ReponseUncheckedUpdateManyWithoutReponsesInput_schema_1 = require("./ReponseUncheckedUpdateManyWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseScalarWhereInput_schema_1.ReponseScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ReponseUpdateManyMutationInput_schema_1.ReponseUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedUpdateManyWithoutReponsesInput_schema_1.ReponseUncheckedUpdateManyWithoutReponsesInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseUpdateManyWithWhereWithoutResultatsInputObjectSchema = Schema;
