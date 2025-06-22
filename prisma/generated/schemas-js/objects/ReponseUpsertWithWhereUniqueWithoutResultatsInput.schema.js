"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpsertWithWhereUniqueWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseUpdateWithoutResultatsInput_schema_1 = require("./ReponseUpdateWithoutResultatsInput.schema");
const ReponseUncheckedUpdateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedUpdateWithoutResultatsInput.schema");
const ReponseCreateWithoutResultatsInput_schema_1 = require("./ReponseCreateWithoutResultatsInput.schema");
const ReponseUncheckedCreateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedCreateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ReponseUpdateWithoutResultatsInput_schema_1.ReponseUpdateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedUpdateWithoutResultatsInput_schema_1.ReponseUncheckedUpdateWithoutResultatsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseUpsertWithWhereUniqueWithoutResultatsInputObjectSchema = Schema;
