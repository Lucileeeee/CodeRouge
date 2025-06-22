"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizCreateOneSchema = void 0;
const zod_1 = require("zod");
const UtilPasserQuizCreateInput_schema_1 = require("./objects/UtilPasserQuizCreateInput.schema");
const UtilPasserQuizUncheckedCreateInput_schema_1 = require("./objects/UtilPasserQuizUncheckedCreateInput.schema");
exports.UtilPasserQuizCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        UtilPasserQuizCreateInput_schema_1.UtilPasserQuizCreateInputObjectSchema,
        UtilPasserQuizUncheckedCreateInput_schema_1.UtilPasserQuizUncheckedCreateInputObjectSchema,
    ]),
});
