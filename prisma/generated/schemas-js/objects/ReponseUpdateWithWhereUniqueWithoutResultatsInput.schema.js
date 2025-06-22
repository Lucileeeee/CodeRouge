"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateWithWhereUniqueWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseUpdateWithoutResultatsInput_schema_1 = require("./ReponseUpdateWithoutResultatsInput.schema");
const ReponseUncheckedUpdateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedUpdateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ReponseUpdateWithoutResultatsInput_schema_1.ReponseUpdateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedUpdateWithoutResultatsInput_schema_1.ReponseUncheckedUpdateWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseUpdateWithWhereUniqueWithoutResultatsInputObjectSchema = Schema;
