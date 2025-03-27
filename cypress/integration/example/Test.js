describe("My First Test", () => {
  it("visit bro", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").as("productLocators");
    // Clicking
    cy.get("@productLocators")
      .get(".product:visible")
      .eq(2)
      .contains("ADD TO CART")
      .click();
    // Clicking and looping
    cy.get("@productLocators")
      .get(".product:visible")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
        cy.get(".brand").then((el) => {
          cy.log(el.text(), "element");
        });
      });
    //
    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then((el) => cy.log(el.text()));
  });
});
