"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCreateOrConnectWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionCreateWithoutImageInput_schema_1 = require("./QuestionCreateWithoutImageInput.schema");
const QuestionUncheckedCreateWithoutImageInput_schema_1 = require("./QuestionUncheckedCreateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutImageInput_schema_1.QuestionCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutImageInput_schema_1.QuestionUncheckedCreateWithoutImageInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionCreateOrConnectWithoutImageInputObjectSchema = Schema;
