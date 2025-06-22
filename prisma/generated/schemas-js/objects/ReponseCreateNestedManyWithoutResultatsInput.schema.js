"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateNestedManyWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateWithoutResultatsInput_schema_1 = require("./ReponseCreateWithoutResultatsInput.schema");
const ReponseUncheckedCreateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedCreateWithoutResultatsInput.schema");
const ReponseCreateOrConnectWithoutResultatsInput_schema_1 = require("./ReponseCreateOrConnectWithoutResultatsInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema).array(),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ReponseCreateOrConnectWithoutResultatsInput_schema_1.ReponseCreateOrConnectWithoutResultatsInputObjectSchema),
        zod_1.z
            .lazy(() => ReponseCreateOrConnectWithoutResultatsInput_schema_1.ReponseCreateOrConnectWithoutResultatsInputObjectSchema)
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
exports.ReponseCreateNestedManyWithoutResultatsInputObjectSchema = Schema;
