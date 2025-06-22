"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatCreateOrConnectWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatWhereUniqueInput_schema_1 = require("./UtilResultatWhereUniqueInput.schema");
const UtilResultatCreateWithoutJoueurInput_schema_1 = require("./UtilResultatCreateWithoutJoueurInput.schema");
const UtilResultatUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilResultatUncheckedCreateWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatWhereUniqueInput_schema_1.UtilResultatWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatCreateWithoutJoueurInput_schema_1.UtilResultatCreateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedCreateWithoutJoueurInput_schema_1.UtilResultatUncheckedCreateWithoutJoueurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatCreateOrConnectWithoutJoueurInputObjectSchema = Schema;
