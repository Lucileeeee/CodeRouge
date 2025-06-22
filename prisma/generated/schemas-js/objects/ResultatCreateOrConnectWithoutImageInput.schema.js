"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateOrConnectWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatCreateWithoutImageInput_schema_1 = require("./ResultatCreateWithoutImageInput.schema");
const ResultatUncheckedCreateWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ResultatCreateWithoutImageInput_schema_1.ResultatCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutImageInput_schema_1.ResultatUncheckedCreateWithoutImageInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatCreateOrConnectWithoutImageInputObjectSchema = Schema;
