"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUpdateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedUpdateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateWithoutQuizInput.schema");
const UtilPasserQuizCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizCreateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithoutQuizInput_schema_1.UtilPasserQuizUpdateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedUpdateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedUpdateWithoutQuizInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizCreateWithoutQuizInput_schema_1.UtilPasserQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedCreateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema = Schema;
