"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateWithWhereUniqueWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatUpdateWithoutJoueurInput_schema_1 = require("./UtilResultatUpdateWithoutJoueurInput.schema");
const UtilResultatUncheckedUpdateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedUpdateWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatUpdateWithoutJoueurInput_schema_1.UtilResultatUpdateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedUpdateWithoutJoueurInput_schema_1.UtilResultatUncheckedUpdateWithoutJoueurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatUpdateWithWhereUniqueWithoutJoueurInputObjectSchema = Schema;
