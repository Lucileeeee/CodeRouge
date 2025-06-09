import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    userAnswers: [],
  }),

  actions: {
    saveAnswer(questionIndex, answerIndex) {
      this.userAnswers[questionIndex] = answerIndex;
    },
    getAllAnswers() {
      return this.userAnswers;
    },
  },
});
