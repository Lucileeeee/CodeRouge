"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateWithWhereUniqueWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatUpdateWithoutReponsesInput_schema_1 = require("./ResultatUpdateWithoutReponsesInput.schema");
const ResultatUncheckedUpdateWithoutReponsesInput_schema_1 = require("./ResultatUncheckedUpdateWithoutReponsesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ResultatUpdateWithoutReponsesInput_schema_1.ResultatUpdateWithoutReponsesInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutReponsesInput_schema_1.ResultatUncheckedUpdateWithoutReponsesInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatUpdateWithWhereUniqueWithoutReponsesInputObjectSchema = Schema;
