describe("Parcours E2E avec retours arrière et validation finale", () => {
  it("L'utilisateur peut modifier ses réponses et obtenir le résultat final depuis Pinia, puis aller à la page suivante", () => {
    cy.visit("/Question");
    cy.get("#pagination .page").then(($pages) => {
      const totalQuestions = $pages.length;
      function answerAndGoBack(index) {
        if (index >= totalQuestions) {
          // Fin du quiz : vérifier le bouton de fin et clic
          cy.contains("Découvrir mon Résultat !").should("exist").click();
          // Vérifie les réponses stockées dans Pinia
          cy.window()
            .its("pinia")
            .then((pinia) => {
              const quizStore = pinia._s.get("quiz");
              expect(quizStore.getAllAnswers()).to.have.length(totalQuestions);
              cy.url().should("include", "/Resultat");
            });
          return;
        }
        // Étape 1 : répondre à la question actuelle
        cy.get(`input[name="question-${index}"]`)
          .first()
          .check({ force: true });
        // Étape 2 : passer à la question suivante
        cy.get(".ombreSuivant").click();
        // Si on est à la dernière question, on ne revient pas
        if (index === totalQuestions - 1) {
          answerAndGoBack(index + 1);
          return;
        }
        // Étape 3 : revenir à la question précédente
        cy.get("#pagination .page").eq(index).click();
        // Étape 4 : modifier la réponse
        cy.get(`input[name="question-${index}"]`).eq(1).check({ force: true });
        // Étape 5 : revenir à la question suivante
        cy.get("#pagination .page")
          .eq(index + 1)
          .click();
        // Étape 6 : enchaîner récursivement
        answerAndGoBack(index + 1);
      }
      answerAndGoBack(0);
    });
  });
});
