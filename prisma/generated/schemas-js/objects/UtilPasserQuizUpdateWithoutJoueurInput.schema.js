"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilPasserQuizUpdateWithoutJoueurInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const QuizUpdateOneRequiredWithoutJoueursNestedInput_schema_1 = require("./QuizUpdateOneRequiredWithoutJoueursNestedInput.schema");
const Schema = zod_1.z
    .object({
    date: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    quiz: zod_1.z
        .lazy(() => QuizUpdateOneRequiredWithoutJoueursNestedInput_schema_1.QuizUpdateOneRequiredWithoutJoueursNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.UtilPasserQuizUpdateWithoutJoueurInputObjectSchema = Schema;
