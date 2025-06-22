"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateManyWithWhereWithoutReponsesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatScalarWhereInput_schema_1 = require("./ResultatScalarWhereInput.schema");
const ResultatUpdateManyMutationInput_schema_1 = require("./ResultatUpdateManyMutationInput.schema");
const ResultatUncheckedUpdateManyWithoutResultatsInput_schema_1 = require("./ResultatUncheckedUpdateManyWithoutResultatsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ResultatScalarWhereInput_schema_1.ResultatScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ResultatUpdateManyMutationInput_schema_1.ResultatUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateManyWithoutResultatsInput_schema_1.ResultatUncheckedUpdateManyWithoutResultatsInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatUpdateManyWithWhereWithoutReponsesInputObjectSchema = Schema;
