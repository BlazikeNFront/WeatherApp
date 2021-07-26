import { APIKey } from "../../privates.js";

/// <reference types='cypress'/>

describe("weatherApp", () => {
  it("should open weatherApp and get main information about weather in cracow", () => {
    cy.visit("./index.html");
    cy.get('[data-cy="userInput"]').type("Cracow");
    cy.get('[data-cy="submitButton"]').click();
    cy.get('[data-cy="cityName"]')
      .should("be.visible")
      .should("have.text", "Cracow");
  });
  it("check API response for Cracow", () => {
    cy.visit("./index.html");
    cy.request(
      "GET",
      `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=Cracow`
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response).to.have.property("isOkStatusCode", true);
      expect(response.body.location).to.have.property("name", "Cracow");
    });
  });
  it("checks for error paragraph after API responds with 400", () => {
    cy.visit("./index.html");
    cy.get('[data-cy="userInput"]').type("abcde"); //check for non existing city to force API to respond with 400 status
    cy.get('[data-cy="submitButton"]').click();
    cy.get('[data-cy="inputErrorMsg"').should("have.text", "Wrong city!");
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
