"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseCreateWithoutQuestionsInput_schema_1 = require("./ReponseCreateWithoutQuestionsInput.schema");
const ReponseUncheckedCreateWithoutQuestionsInput_schema_1 = require("./ReponseUncheckedCreateWithoutQuestionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ReponseCreateWithoutQuestionsInput_schema_1.ReponseCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutQuestionsInput_schema_1.ReponseUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema = Schema;
