"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpdateOneRequiredWithoutUtilisateursNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatCreateWithoutUtilisateursInput_schema_1 = require("./ResultatCreateWithoutUtilisateursInput.schema");
const ResultatUncheckedCreateWithoutUtilisateursInput_schema_1 = require("./ResultatUncheckedCreateWithoutUtilisateursInput.schema");
const ResultatCreateOrConnectWithoutUtilisateursInput_schema_1 = require("./ResultatCreateOrConnectWithoutUtilisateursInput.schema");
const ResultatUpsertWithoutUtilisateursInput_schema_1 = require("./ResultatUpsertWithoutUtilisateursInput.schema");
const ResultatWhereUniqueInput_schema_1 = require("./ResultatWhereUniqueInput.schema");
const ResultatUpdateWithoutUtilisateursInput_schema_1 = require("./ResultatUpdateWithoutUtilisateursInput.schema");
const ResultatUncheckedUpdateWithoutUtilisateursInput_schema_1 = require("./ResultatUncheckedUpdateWithoutUtilisateursInput.schema");
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
    upsert: zod_1.z
        .lazy(() => ResultatUpsertWithoutUtilisateursInput_schema_1.ResultatUpsertWithoutUtilisateursInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => ResultatWhereUniqueInput_schema_1.ResultatWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ResultatUpdateWithoutUtilisateursInput_schema_1.ResultatUpdateWithoutUtilisateursInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutUtilisateursInput_schema_1.ResultatUncheckedUpdateWithoutUtilisateursInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ResultatUpdateOneRequiredWithoutUtilisateursNestedInputObjectSchema = Schema;
