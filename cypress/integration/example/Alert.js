/// <reference types="cypress" />

describe("My Third Test", () => {
  it("second testing bro", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");
    //  alert button
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    // window alert
    cy.on("window.alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window.confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
