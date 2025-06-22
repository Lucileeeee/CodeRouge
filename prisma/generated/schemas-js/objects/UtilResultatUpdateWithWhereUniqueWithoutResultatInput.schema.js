"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateWithWhereUniqueWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithoutResultatInput_schema_1 = require("./UtilResultatUpdateWithoutResultatInput.schema");
const UtilResultatUncheckedUpdateWithoutResultatInput_schema_1 = require("./UtilResultatUncheckedUpdateWithoutResultatInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatUpdateWithoutResultatInput_schema_1.UtilResultatUpdateWithoutResultatInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedUpdateWithoutResultatInput_schema_1.UtilResultatUncheckedUpdateWithoutResultatInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatUpdateWithWhereUniqueWithoutResultatInputObjectSchema = Schema;
