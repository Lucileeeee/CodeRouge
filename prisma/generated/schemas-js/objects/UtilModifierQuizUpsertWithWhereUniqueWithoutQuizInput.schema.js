"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizUpdateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUpdateWithoutQuizInput.schema");
const UtilModifierQuizUncheckedUpdateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedUpdateWithoutQuizInput.schema");
const UtilModifierQuizCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateWithoutQuizInput.schema");
const UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizUpdateWithoutQuizInput_schema_1.UtilModifierQuizUpdateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedUpdateWithoutQuizInput_schema_1.UtilModifierQuizUncheckedUpdateWithoutQuizInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizCreateWithoutQuizInput_schema_1.UtilModifierQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1.UtilModifierQuizUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
})
    .strict();
exports.UtilModifierQuizUpsertWithWhereUniqueWithoutQuizInputObjectSchema = Schema;
