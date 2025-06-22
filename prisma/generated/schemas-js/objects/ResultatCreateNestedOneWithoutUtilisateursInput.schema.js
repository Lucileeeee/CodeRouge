"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatCreateNestedOneWithoutUtilisateursInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateWithoutUtilisateursInput_schema_1 = require("./ResultatCreateWithoutUtilisateursInput.schema");
const ResultatUncheckedCreateWithoutUtilisateursInput_schema_1 = require("./ResultatUncheckedCreateWithoutUtilisateursInput.schema");
const ResultatCreateOrConnectWithoutUtilisateursInput_schema_1 = require("./ResultatCreateOrConnectWithoutUtilisateursInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatCreateWithoutUtilisateursInput_schema_1.ResultatCreateWithoutUtilisateursInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutUtilisateursInput_schema_1.ResultatUncheckedCreateWithoutUtilisateursInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ResultatCreateOrConnectWithoutUtilisateursInput_schema_1.ResultatCreateOrConnectWithoutUtilisateursInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.ResultatCreateNestedOneWithoutUtilisateursInputObjectSchema = Schema;
