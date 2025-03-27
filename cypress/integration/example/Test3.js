/// <reference types="cypress" />

describe("My Third Test", () => {
  // it("second testing bro", () => {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");
  //   //  checkbox
  //   cy.get("#checkBoxOption1")
  //     .check()
  //     .should("be.checked")
  //     .and("have.value", "option1");
  //   cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
  //   cy.get('input[type="checkbox"]').check(["option1", "option2"]);

  //   // static select
  //   cy.get("select").select("option2").should("have.value", "option2");
  //   // dynamic selection
  //   cy.get("#autocomplete").type("ind");
  //   cy.get(".ui-menu-item div").each(($el, index, $list) => {
  //     if ($el.text() === "India") {
  //       $el.click();
  //     }
  //   });
  //   cy.get("#autocomplete").should("have.value", "India");
  //   // Conditonal element shown
  //   cy.get("#displayed-text").should("be.visible");
  //   cy.get("#hide-textbox").click();
  //   cy.get("#displayed-text").should("not.be.visible");
  //   cy.get("#show-textbox").click();
  //   cy.get("#displayed-text").should("be.visible");
  //   cy.get('[value="radio2"').check().should("be.checked");
  // });

  /* ==== Test Created with Cypress Studio ==== */
  it("record", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");
    cy.get("#dropdown-class-example").select("option2");
    cy.get(".jumbotron > div > :nth-child(3)").click();
    cy.get("#checkBoxOption2").check();
    cy.get("#checkBoxOption3").check();
    cy.get("#name").clear("as");
    cy.get("#name").type("asdferp");
    cy.get("#confirmbtn").click();
    cy.get("#alertbtn").click();
    /* ==== End Cypress Studio ==== */
  });
});
