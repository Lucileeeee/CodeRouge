"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizFindUniqueSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizWhereUniqueInput_schema_1 = require("./objects/UtilPasserQuizWhereUniqueInput.schema");
exports.UtilPasserQuizFindUniqueSchema = zod_1.z.object({
    where: UtilPasserQuizWhereUniqueInput_schema_1.UtilPasserQuizWhereUniqueInputObjectSchema,
});
