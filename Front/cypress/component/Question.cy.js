import { mount } from "@cypress/vue";
import { createPinia, setActivePinia } from "pinia";
import Question from "../../src/views/quiz/Question.vue";
import { quiz } from "../../src/views/quiz/ObjetQuiz.vue";

describe("Composant Question.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia()); // instancie Pinia proprement
  });

  it("affiche la première question et ses réponses", () => {
    mount(Question);
    cy.get("h1.question").should("contain.text", quiz.value[0].question);
    quiz.value[0].reponses.forEach((reponse) => {
      cy.contains(reponse).should("exist");
    });
  });

  it('affiche le bouton "Question Suivante" après sélection d’une réponse', () => {
    mount(Question);
    cy.get('input[type="radio"]').first().check({ force: true });
    cy.get(".ombreSuivant").should("be.visible");
    cy.get(".boutonSuivant").should("contain.text", "Question Suivante");
  });
});
