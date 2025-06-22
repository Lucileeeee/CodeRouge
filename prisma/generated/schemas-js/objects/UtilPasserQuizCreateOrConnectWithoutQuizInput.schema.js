"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateOrConnectWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizCreateWithoutQuizInput_schema_1.UtilPasserQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizCreateOrConnectWithoutQuizInputObjectSchema = Schema;
