describe("weatherApp", () => {
  it("should open weatherApp and get main information about weather in cracow", () => {
    cy.visit("./index.html");
    cy.get('[data-cy="userInput"]').type("Cracow");
    cy.get('[data-cy="submitButton"]').click();
    cy.get('[data-cy="cityName"]')
      .should("be.visible")
      .should("have.text", "Cracow");
  });
  it("should open weatherApp and beside main information also get temperature forecast charts, then hide them and go back to home view", () => {
    cy.visit("./index.html");
    cy.get('[data-cy="userInput"]').type("Cracow");
    cy.get('[data-cy="submitButton"]').click();
    cy.get('[data-cy="cityName"]')
      .should("be.visible")
      .should("have.text", "Cracow");
    cy.get('[data-cy="getForecastButton"]')
      .should("be.visible")
      .should("have.text", "Get forecast for 3 days!")
      .click();
    cy.get('[data-cy="dailyForecastModule"]').should(
      "not.have.class",
      "hidden"
    );
    cy.get('[data-cy="getForecastButton"]')
      .should("have.text", "Hide forecast")
      .click();
    cy.get('[data-cy="dailyForecastModule"]').should("have.class", "hidden");
    cy.get('[data-cy="backToSearchViewButton"]')
      .should("have.text", "Check in another city !")
      .click();
    cy.get('[data-cy="cityName"]').should("not.be.visible");
    cy.get('[data-cy="userInput"]').should("be.visible");
  });
});
