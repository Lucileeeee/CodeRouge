"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateNestedManyWithoutQuestionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateWithoutQuestionsInput_schema_1 = require("./ReponseCreateWithoutQuestionsInput.schema");
const ReponseUncheckedCreateWithoutQuestionsInput_schema_1 = require("./ReponseUncheckedCreateWithoutQuestionsInput.schema");
const ReponseCreateOrConnectWithoutQuestionsInput_schema_1 = require("./ReponseCreateOrConnectWithoutQuestionsInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateWithoutQuestionsInput_schema_1.ReponseCreateWithoutQuestionsInputObjectSchema),
        zod_1.z.lazy(() => ReponseCreateWithoutQuestionsInput_schema_1.ReponseCreateWithoutQuestionsInputObjectSchema).array(),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutQuestionsInput_schema_1.ReponseUncheckedCreateWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUncheckedCreateWithoutQuestionsInput_schema_1.ReponseUncheckedCreateWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateOrConnectWithoutQuestionsInput_schema_1.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseCreateOrConnectWithoutQuestionsInput_schema_1.ReponseCreateOrConnectWithoutQuestionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ReponseCreateNestedManyWithoutQuestionsInputObjectSchema = Schema;
