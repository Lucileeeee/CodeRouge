"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizDeleteManySchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereInput_schema_1 = require("./objects/UtilPasserQuizWhereInput.schema");
exports.UtilPasserQuizDeleteManySchema = zod_1.z.object({
    where: UtilPasserQuizWhereInput_schema_1.UtilPasserQuizWhereInputObjectSchema.optional(),
});
