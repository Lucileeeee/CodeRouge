"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateManyWithWhereWithoutQuizInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizScalarWhereInput_schema_1 = require("./UtilPasserQuizScalarWhereInput.schema");
const UtilPasserQuizUpdateManyMutationInput_schema_1 = require("./UtilPasserQuizUpdateManyMutationInput.schema");
const UtilPasserQuizUncheckedUpdateManyWithoutJoueursInput_schema_1 = require("./UtilPasserQuizUncheckedUpdateManyWithoutJoueursInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilPasserQuizScalarWhereInput_schema_1.UtilPasserQuizScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilPasserQuizUpdateManyMutationInput_schema_1.UtilPasserQuizUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => UtilPasserQuizUncheckedUpdateManyWithoutJoueursInput_schema_1.UtilPasserQuizUncheckedUpdateManyWithoutJoueursInputObjectSchema),
    ]),
})
    .strict();
exports.UtilPasserQuizUpdateManyWithWhereWithoutQuizInputObjectSchema = Schema;
