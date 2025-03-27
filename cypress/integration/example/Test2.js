describe("My Second Test", () => {
  // tst login
  it("second testing bro", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocators");
    // Clicking and looping
    cy.get("@productLocators")
      .find(".product")
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
    cy.get(".cart-icon > img").click();
    cy.contains("PROCED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
  // forgot poass
});
