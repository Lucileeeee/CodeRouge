describe("Parcours E2E du quiz avec retour arrière", () => {
  it("L'utilisateur peut changer une réponse en revenant en arrière et finir le quiz", () => {
    cy.visit("/Question");

    // Vérifie qu'on voit bien la première question
    cy.get("h1.question").should("exist");

    // Étape 1 : répondre à toutes les questions une première fois
    cy.get("#pagination .page").then(($pages) => {
      const totalQuestions = $pages.length;

      function answerQuestion(index) {
        if (index >= totalQuestions) {
          return;
        }
        cy.get(`input[name="question-${index}"]`)
          .first()
          .check({ force: true });
        cy.get(".ombreSuivant").click();
        cy.get(`h1.question#question-${index}`).should("not.exist");
        cy.get(`h1.question#question-${index + 1}`).should("exist");
        answerQuestion(index + 1);
      }

      answerQuestion(0);

      // Étape 2 : revenir à la première question via pagination
      cy.get("#pagination .page").eq(0).click();

      // Vérifier que la question 0 est affichée
      cy.get(`h1.question#question-0`).should("exist");

      // Étape 3 : changer la réponse à la première question
      cy.get(`input[name="question-0"]`).eq(1).check({ force: true });

      // Étape 4 : aller directement à la dernière question via pagination
      cy.get("#pagination .page")
        .eq(totalQuestions - 1)
        .click();

      // Vérifier qu'on est bien sur la dernière question
      cy.get(`h1.question#question-${totalQuestions - 1}`).should("exist");

      // Étape 5 : vérifier la présence du bouton "Découvrir mon Résultat !"
      cy.contains("Découvrir mon Résultat !").should("exist");
    });
  });
});
