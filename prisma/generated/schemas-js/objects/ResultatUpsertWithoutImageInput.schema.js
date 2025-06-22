"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpsertWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatUpdateWithoutImageInput_schema_1 = require("./ResultatUpdateWithoutImageInput.schema");
const ResultatUncheckedUpdateWithoutImageInput_schema_1 = require("./ResultatUncheckedUpdateWithoutImageInput.schema");
const ResultatCreateWithoutImageInput_schema_1 = require("./ResultatCreateWithoutImageInput.schema");
const ResultatUncheckedCreateWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => ResultatUpdateWithoutImageInput_schema_1.ResultatUpdateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutImageInput_schema_1.ResultatUncheckedUpdateWithoutImageInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ResultatCreateWithoutImageInput_schema_1.ResultatCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutImageInput_schema_1.ResultatUncheckedCreateWithoutImageInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatUpsertWithoutImageInputObjectSchema = Schema;
