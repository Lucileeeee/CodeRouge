"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilResultatWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const UtilResultatJoueurIdResultatIdCompoundUniqueInput_schema_1 = require("./UtilResultatJoueurIdResultatIdCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    joueurId_resultatId: zod_1.z
        .lazy(() => UtilResultatJoueurIdResultatIdCompoundUniqueInput_schema_1.UtilResultatJoueurIdResultatIdCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilResultatWhereUniqueInputObjectSchema = Schema;
