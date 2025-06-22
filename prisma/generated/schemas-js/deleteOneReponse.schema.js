"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseDeleteOneSchema = void 0;
const zod_1 = require("zod");
const ReponseWhereUniqueInput_schema_1 = require("./objects/ReponseWhereUniqueInput.schema");
exports.ReponseDeleteOneSchema = zod_1.z.object({
    where: ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema,
});
