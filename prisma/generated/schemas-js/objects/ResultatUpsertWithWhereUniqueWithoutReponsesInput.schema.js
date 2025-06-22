"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpsertWithWhereUniqueWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatUpdateWithoutReponsesInput_schema_1 = require("./ResultatUpdateWithoutReponsesInput.schema");
const ResultatUncheckedUpdateWithoutReponsesInput_schema_1 = require("./ResultatUncheckedUpdateWithoutReponsesInput.schema");
const ResultatCreateWithoutReponsesInput_schema_1 = require("./ResultatCreateWithoutReponsesInput.schema");
const ResultatUncheckedCreateWithoutReponsesInput_schema_1 = require("./ResultatUncheckedCreateWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ResultatUpdateWithoutReponsesInput_schema_1.ResultatUpdateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutReponsesInput_schema_1.ResultatUncheckedUpdateWithoutReponsesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ResultatCreateWithoutReponsesInput_schema_1.ResultatCreateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutReponsesInput_schema_1.ResultatUncheckedCreateWithoutReponsesInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatUpsertWithWhereUniqueWithoutReponsesInputObjectSchema = Schema;
