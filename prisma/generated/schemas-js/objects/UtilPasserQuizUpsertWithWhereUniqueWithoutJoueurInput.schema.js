"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUpdateWithoutJoueurInput.schema");
const UtilPasserQuizUncheckedUpdateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateWithoutJoueurInput.schema");
const UtilPasserQuizCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizCreateWithoutJoueurInput.schema");
const UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedCreateWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithoutJoueurInput_schema_1.UtilPasserQuizUpdateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedUpdateWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedUpdateWithoutJoueurInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizCreateWithoutJoueurInput_schema_1.UtilPasserQuizCreateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedCreateWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedCreateWithoutJoueurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizUpsertWithWhereUniqueWithoutJoueurInputObjectSchema = Schema;
