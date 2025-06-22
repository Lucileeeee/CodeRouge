"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    url: zod_1.z.literal(true).optional(),
    prompt: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.ImageCountAggregateInputObjectSchema = Schema;
