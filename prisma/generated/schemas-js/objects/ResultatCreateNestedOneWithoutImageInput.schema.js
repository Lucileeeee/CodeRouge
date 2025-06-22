"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateNestedOneWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateWithoutImageInput_schema_1 = require("./ResultatCreateWithoutImageInput.schema");
const ResultatUncheckedCreateWithoutImageInput_schema_1 = require("./ResultatUncheckedCreateWithoutImageInput.schema");
const ResultatCreateOrConnectWithoutImageInput_schema_1 = require("./ResultatCreateOrConnectWithoutImageInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatCreateWithoutImageInput_schema_1.ResultatCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutImageInput_schema_1.ResultatUncheckedCreateWithoutImageInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ResultatCreateOrConnectWithoutImageInput_schema_1.ResultatCreateOrConnectWithoutImageInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.ResultatCreateNestedOneWithoutImageInputObjectSchema = Schema;
