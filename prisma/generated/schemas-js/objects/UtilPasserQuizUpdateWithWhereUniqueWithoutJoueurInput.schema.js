"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./UtilPasserQuizWhereUniqueInput.schema");
const UtilPasserQuizUpdateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUpdateWithoutJoueurInput.schema");
const UtilPasserQuizUncheckedUpdateWithoutJoueurInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateWithoutJoueurInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateWithoutJoueurInput_schema_1.UtilPasserQuizUpdateWithoutJoueurInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedUpdateWithoutJoueurInput_schema_1.UtilPasserQuizUncheckedUpdateWithoutJoueurInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizUpdateWithWhereUniqueWithoutJoueurInputObjectSchema = Schema;
