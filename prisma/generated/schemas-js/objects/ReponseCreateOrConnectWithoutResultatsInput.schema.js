"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateOrConnectWithoutResultatsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./ReponseWhereUniqueInput.schema");
const ReponseCreateWithoutResultatsInput_schema_1 = require("./ReponseCreateWithoutResultatsInput.schema");
const ReponseUncheckedCreateWithoutResultatsInput_schema_1 = require("./ReponseUncheckedCreateWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ReponseCreateWithoutResultatsInput_schema_1.ReponseCreateWithoutResultatsInputObjectSchema),
        zod_1.z.lazy(() => ReponseUncheckedCreateWithoutResultatsInput_schema_1.ReponseUncheckedCreateWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.ReponseCreateOrConnectWithoutResultatsInputObjectSchema = Schema;
