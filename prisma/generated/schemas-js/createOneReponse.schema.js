"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCreateOneSchema = void 0;
const zod_1 = require("zod");
const ReponseCreateInput_schema_1 = require("./objects/ReponseCreateInput.schema");
const ReponseUncheckedCreateInput_schema_1 = require("./objects/ReponseUncheckedCreateInput.schema");
exports.ReponseCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ReponseCreateInput_schema_1.ReponseCreateInputObjectSchema,
        ReponseUncheckedCreateInput_schema_1.ReponseUncheckedCreateInputObjectSchema,
    ]),
});
