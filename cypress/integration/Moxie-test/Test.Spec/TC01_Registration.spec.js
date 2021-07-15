describe("Registration e2e_testing", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });
  it("Personal Details", () => {
    cy.visit("https://heubertapp.com/");
    cy.title().should("eq", "Luzon");
    cy.location("protocol").should("eq", "https:");
    cy.get('input[id="email"]').type("bikesh@heubert.com");
    cy.get('input[id="first_name"]').type("Bikesh");
    cy.get('input[id="last_name"]').type("Shrestha");
    cy.get('input[id="country"]').click();
    cy.get('input[aria-controls="country_list"]').type("Nepa{enter}");
    cy.get('input[id="city_or_state"]').type("Kathmandu");
    cy.get("[data-testid=submit-button]").click();
  });

  it("Institution Details", () => {
    cy.title().should("eq", "Luzon");
    cy.contains("Institution Details");
    cy.get('input[placeholder="Your institution name"]').type(
      "Heubert Technologies"
    );
    cy.get('input[id="institution-details-form_company_domain"]').type("HEUB");
    cy.get('input[ id="institution-details-form_position"]').click();
    cy.contains("CEO").click();
    cy.get('input[ id="institution-details-form_phone"]').type("9899909822");
    cy.get("[data-testid=submit-button]").click();
  });

  it("Pricing Plan Details", () => {
    cy.title().should("eq", "Luzon");
    cy.contains("Starter").click();
    cy.get("[data-testid=submit-button]").click();
  });

  it("Work Order Scope", () => {
    cy.get('input[ id="work-order-scope-form_feature"]').click();
    cy.contains("Marketin").click();
    cy.get('input[id="work-order-scope-form_number_of_employees"]').type("4");
    cy.get(
      'input[id="work-order-scope-form_number_of_destination_countries"]'
    ).type("4");

    cy.get('input[id="work-order-scope-form_countries_operated"]').click();
    cy.get(
      'input[aria-controls="work-order-scope-form_countries_operated_list"]'
    ).type("Nepa{enter}");
    cy.get('input[id="work-order-scope-form_countries_operated"]').click();
    cy.get(
      'input[aria-controls="work-order-scope-form_countries_operated_list"]'
    ).type("Aus{enter}");
    cy.get(
      "div.registration-layout div.ant-row.ant-row-space-around.ant-row-middle.full-height div.ant-col.ant-col-xs-23.ant-col-lg-15 div.registration-card div.ant-row > div.ant-col.ant-col-16.padding-top-4.padding-left-4.padding-right-4.padding-bottom-2:nth-child(2)"
    ).click();
    cy.get('input[id="work-order-scope-form_number_of_estimates"]').type(
      "1000"
    );
    cy.get("[data-testid=submit-button]").click();
  });
});
