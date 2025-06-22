"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseDeleteManySchema = void 0;
const zod_1 = require("zod");
const ReponseWhereInput_schema_1 = require("./objects/ReponseWhereInput.schema");
exports.ReponseDeleteManySchema = zod_1.z.object({
    where: ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema.optional(),
});
