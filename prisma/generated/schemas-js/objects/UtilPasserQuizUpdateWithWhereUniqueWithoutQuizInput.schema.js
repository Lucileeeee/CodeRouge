"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUpdateWithoutQuizInput.schema");
const UtilPasserQuizUncheckedUpdateWithoutQuizInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithoutQuizInput_schema_1.UtilPasserQuizUpdateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedUpdateWithoutQuizInput_schema_1.UtilPasserQuizUncheckedUpdateWithoutQuizInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizUpdateWithWhereUniqueWithoutQuizInputObjectSchema = Schema;
