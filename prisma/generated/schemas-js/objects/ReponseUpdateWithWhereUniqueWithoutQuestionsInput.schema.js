"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseUpdateWithoutQuestionsInput_schema_1 = require("./ReponseUpdateWithoutQuestionsInput.schema");
const ReponseUncheckedUpdateWithoutQuestionsInput_schema_1 = require("./ReponseUncheckedUpdateWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ReponseUpdateWithoutQuestionsInput_schema_1.ReponseUpdateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedUpdateWithoutQuestionsInput_schema_1.ReponseUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseUpdateWithWhereUniqueWithoutQuestionsInputObjectSchema = Schema;
