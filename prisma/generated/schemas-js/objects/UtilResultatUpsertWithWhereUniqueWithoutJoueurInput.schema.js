"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpsertWithWhereUniqueWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithoutJoueurInput_schema_1 = require("./UtilResultatUpdateWithoutJoueurInput.schema");
const UtilResultatUncheckedUpdateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedUpdateWithoutJoueurInput.schema");
const UtilResultatCreateWithoutJoueurInput_schema_1 = require("./UtilResultatCreateWithoutJoueurInput.schema");
const UtilResultatUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatUpdateWithoutJoueurInput_schema_1.UtilResultatUpdateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedUpdateWithoutJoueurInput_schema_1.UtilResultatUncheckedUpdateWithoutJoueurInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatCreateWithoutJoueurInput_schema_1.UtilResultatCreateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedCreateWithoutJoueurInput_schema_1.UtilResultatUncheckedCreateWithoutJoueurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatUpsertWithWhereUniqueWithoutJoueurInputObjectSchema = Schema;
