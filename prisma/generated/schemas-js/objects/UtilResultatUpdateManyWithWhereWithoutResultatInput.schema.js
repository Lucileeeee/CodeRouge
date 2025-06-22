"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatUpdateManyWithWhereWithoutResultatInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatScalarWhereInput_schema_1 = require("./UtilResultatScalarWhereInput.schema");
const UtilResultatUpdateManyMutationInput_schema_1 = require("./UtilResultatUpdateManyMutationInput.schema");
const UtilResultatUncheckedUpdateManyWithoutUtilisateursInput_schema_1 = require("./UtilResultatUncheckedUpdateManyWithoutUtilisateursInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UtilResultatScalarWhereInput_schema_1.UtilResultatScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => UtilResultatUpdateManyMutationInput_schema_1.UtilResultatUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => UtilResultatUncheckedUpdateManyWithoutUtilisateursInput_schema_1.UtilResultatUncheckedUpdateManyWithoutUtilisateursInputObjectSchema),
    ]),
})
    .strict();
exports.UtilResultatUpdateManyWithWhereWithoutResultatInputObjectSchema = Schema;
