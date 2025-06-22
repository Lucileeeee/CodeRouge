"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUncheckedUpdateOneWithoutImageNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionCreateWithoutImageInput_schema_1 = require("./QuestionCreateWithoutImageInput.schema");
const QuestionUncheckedCreateWithoutImageInput_schema_1 = require("./QuestionUncheckedCreateWithoutImageInput.schema");
const QuestionCreateOrConnectWithoutImageInput_schema_1 = require("./QuestionCreateOrConnectWithoutImageInput.schema");
const QuestionUpsertWithoutImageInput_schema_1 = require("./QuestionUpsertWithoutImageInput.schema");
const QuestionWhereUniqueInput_schema_1 = require("./QuestionWhereUniqueInput.schema");
const QuestionUpdateWithoutImageInput_schema_1 = require("./QuestionUpdateWithoutImageInput.schema");
const QuestionUncheckedUpdateWithoutImageInput_schema_1 = require("./QuestionUncheckedUpdateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionCreateWithoutImageInput_schema_1.QuestionCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutImageInput_schema_1.QuestionUncheckedCreateWithoutImageInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => QuestionCreateOrConnectWithoutImageInput_schema_1.QuestionCreateOrConnectWithoutImageInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => QuestionUpsertWithoutImageInput_schema_1.QuestionUpsertWithoutImageInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => QuestionWhereUniqueInput_schema_1.QuestionWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => QuestionUpdateWithoutImageInput_schema_1.QuestionUpdateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateWithoutImageInput_schema_1.QuestionUncheckedUpdateWithoutImageInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.QuestionUncheckedUpdateOneWithoutImageNestedInputObjectSchema = Schema;
