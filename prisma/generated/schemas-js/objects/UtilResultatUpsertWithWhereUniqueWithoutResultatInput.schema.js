"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpsertWithWhereUniqueWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithoutResultatInput_schema_1 = require("./UtilResultatUpdateWithoutResultatInput.schema");
const UtilResultatUncheckedUpdateWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedUpdateWithoutResultatInput.schema");
const UtilResultatCreateWithoutResultatInput_schema_1 = require("./UtilResultatCreateWithoutResultatInput.schema");
const UtilResultatUncheckedCreateWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatUpdateWithoutResultatInput_schema_1.UtilResultatUpdateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedUpdateWithoutResultatInput_schema_1.UtilResultatUncheckedUpdateWithoutResultatInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatCreateWithoutResultatInput_schema_1.UtilResultatCreateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedCreateWithoutResultatInput_schema_1.UtilResultatUncheckedCreateWithoutResultatInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatUpsertWithWhereUniqueWithoutResultatInputObjectSchema = Schema;
