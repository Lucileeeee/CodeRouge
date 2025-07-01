describe("Comportement visuel lors de la modification d'une réponse", () => {
  it("L'utilisateur peut naviguer entre les questions et voir le changement de sélection sur la question 0", () => {
    cy.visit("/Question");

    // Étape 1 : répondre à la question 0
    cy.get('input[name="question-0"]').eq(0).check({ force: true });

    // Étape 2 : passer à la question 1
    cy.get(".ombreSuivant").click();
    cy.get("h1.question#question-1").should("exist");

    // Étape 3 : revenir à la question 0
    cy.get("#pagination .page").eq(0).click();
    cy.get("h1.question#question-0").should("exist");

    // Étape 4 : changer la réponse
    cy.get('input[name="question-0"]').eq(1).check({ force: true });

    // Étape 5 : recliquer sur "Question Suivante" pour déclencher l'enregistrement
    cy.get(".ombreSuivant").click();
    cy.get("h1.question#question-1").should("exist");
  });
});
