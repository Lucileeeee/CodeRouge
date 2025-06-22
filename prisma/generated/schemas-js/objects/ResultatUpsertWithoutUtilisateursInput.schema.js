"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultatUpsertWithoutUtilisateursInputObjectSchema = void 0;
const zod_1 = require("zod");
const ResultatUpdateWithoutUtilisateursInput_schema_1 = require("./ResultatUpdateWithoutUtilisateursInput.schema");
const ResultatUncheckedUpdateWithoutUtilisateursInput_schema_1 = require("./ResultatUncheckedUpdateWithoutUtilisateursInput.schema");
const ResultatCreateWithoutUtilisateursInput_schema_1 = require("./ResultatCreateWithoutUtilisateursInput.schema");
const ResultatUncheckedCreateWithoutUtilisateursInput_schema_1 = require("./ResultatUncheckedCreateWithoutUtilisateursInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => ResultatUpdateWithoutUtilisateursInput_schema_1.ResultatUpdateWithoutUtilisateursInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedUpdateWithoutUtilisateursInput_schema_1.ResultatUncheckedUpdateWithoutUtilisateursInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ResultatCreateWithoutUtilisateursInput_schema_1.ResultatCreateWithoutUtilisateursInputObjectSchema),
        zod_1.z.lazy(() => ResultatUncheckedCreateWithoutUtilisateursInput_schema_1.ResultatUncheckedCreateWithoutUtilisateursInputObjectSchema),
    ]),
})
    .strict();
exports.ResultatUpsertWithoutUtilisateursInputObjectSchema = Schema;
