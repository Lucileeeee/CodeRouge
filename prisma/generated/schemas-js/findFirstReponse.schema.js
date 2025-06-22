"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseFindFirstSchema = void 0;
const zod_1 = require("zod");
const ReponseOrderByWithRelationInput_schema_1 = require("./objects/ReponseOrderByWithRelationInput.schema");
const ReponseWhereInput_schema_1 = require("./objects/ReponseWhereInput.schema");
const ReponseWhereUniqueInput_schema_1 = require("./objects/ReponseWhereUniqueInput.schema");
const ReponseScalarFieldEnum_schema_1 = require("./enums/ReponseScalarFieldEnum.schema");
exports.ReponseFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ReponseOrderByWithRelationInput_schema_1.ReponseOrderByWithRelationInputObjectSchema,
        ReponseOrderByWithRelationInput_schema_1.ReponseOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ReponseWhereInput_schema_1.ReponseWhereInputObjectSchema.optional(),
    cursor: ReponseWhereUniqueInput_schema_1.ReponseWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(ReponseScalarFieldEnum_schema_1.ReponseScalarFieldEnumSchema).optional(),
});
