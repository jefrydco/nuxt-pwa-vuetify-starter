describe("Example Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(".v-card__title", "Welcome to the Vuetify + Nuxt.js template");
    cy.screenshot();
  });

  it("Go to inspire page", () => {
    cy.get("a.v-btn[href='/inspire']").click();
    cy.contains(
      "blockquote",
      "First, solve the problem. Then, write the code."
    );
    cy.screenshot();
  });
});
