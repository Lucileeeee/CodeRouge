"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilModifierQuizCreateOrConnectWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilModifierQuizWhereUniqueInput_schema_1 = require("./UtilModifierQuizWhereUniqueInput.schema");
const UtilModifierQuizCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizCreateWithoutQuizInput.schema");
const UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1 = require("./UtilModifierQuizUncheckedCreateWithoutQuizInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilModifierQuizWhereUniqueInput_schema_1.UtilModifierQuizWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilModifierQuizCreateWithoutQuizInput_schema_1.UtilModifierQuizCreateWithoutQuizInputObjectSchema),
        zod_1.z.lazy(() => UtilModifierQuizUncheckedCreateWithoutQuizInput_schema_1.UtilModifierQuizUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
})
    .strict();
exports.UtilModifierQuizCreateOrConnectWithoutQuizInputObjectSchema = Schema;
