"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionUpsertWithoutImageInputObjectSchema = void 0;
const zod_1 = require("zod");
const QuestionUpdateWithoutImageInput_schema_1 = require("./QuestionUpdateWithoutImageInput.schema");
const QuestionUncheckedUpdateWithoutImageInput_schema_1 = require("./QuestionUncheckedUpdateWithoutImageInput.schema");
const QuestionCreateWithoutImageInput_schema_1 = require("./QuestionCreateWithoutImageInput.schema");
const QuestionUncheckedCreateWithoutImageInput_schema_1 = require("./QuestionUncheckedCreateWithoutImageInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => QuestionUpdateWithoutImageInput_schema_1.QuestionUpdateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedUpdateWithoutImageInput_schema_1.QuestionUncheckedUpdateWithoutImageInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => QuestionCreateWithoutImageInput_schema_1.QuestionCreateWithoutImageInputObjectSchema),
        zod_1.z.lazy(() => QuestionUncheckedCreateWithoutImageInput_schema_1.QuestionUncheckedCreateWithoutImageInputObjectSchema),
    ]),
})
    .strict();
exports.QuestionUpsertWithoutImageInputObjectSchema = Schema;
