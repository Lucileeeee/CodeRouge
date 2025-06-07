import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    userAnswers: [], // Pas besoin de connaître quiz.length ici
  }),

  actions: {
    saveAnswer(questionIndex, answerIndex) {
      // S'assurer que le tableau est assez grand
      while (this.userAnswers.length <= questionIndex) {
        this.userAnswers.push(null);
      }
      this.userAnswers[questionIndex] = answerIndex;
    },

    getAllAnswers() {
      return this.userAnswers;
    },
  },
});
