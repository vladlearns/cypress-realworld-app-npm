describe("Sign Up form", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("locates elements on the page using various CSS selectors", () => {
    // Locate the first name field using an attribute selector
    cy.get("[data-test=signup-first-name]");

    // Locate the submit button using a class name
    cy.get(".MuiButton-containedPrimary");

    // Locate the button using a combination of tag name and class name
    cy.get("button.MuiButtonBase-root");

    // Locate the first element with the class .MuiFormControl-root using an attribute selector
    cy.get("[class*='MuiFormControl-root']").first();

    // Locate the last element with the class .MuiFormControl-root using an attribute selector
    cy.get("[class*='MuiFormControl-root']").last();

    // Locate the first name field using an ID selector
    cy.get("#firstName");

    // Locate all elements with the class .MuiTextField-root using a class selector
    cy.get(".MuiTextField-root");

    // Locate the first name field using a type selector
    cy.get("input");

    // Locate all elements on the page using a universal selector
    cy.get("*");

    // Locate the first name field using a compound selector
    cy.get("input.MuiInputBase-input");

    // Locate the submit button using a pseudo-class selector
    cy.get(":first-child")
      .first()
      .within(() => {
        cy.get(".MuiButton-containedPrimary");
      });

    // Locate the first child of the form element using a pseudo-class selector
    cy.get("form").children(":first-child").should("have.class", "MuiFormControl-root");

    // Locate the last child of the form element using a pseudo-class selector
    cy.get("form").children(":last-child").should("have.class", "MuiGrid-root");
  });

  it("locates elements on the page using XPath selectors", () => {
    // Locate the first name field using an XPath selector
    cy.xpath("//div[@data-test='signup-first-name']");

    // Locate the submit button using an XPath selector
    cy.xpath("//button[contains(@class, 'MuiButton-containedPrimary')]");

    // Locate the button using an XPath selector
    cy.xpath("//button[contains(@class, 'MuiButtonBase-root')]");

    // Locate the first element with the class .MuiFormControl-root using an XPath selector
    cy.xpath("(//*[contains(@class, 'MuiFormControl-root')])[1]");

    // Locate the last element with the class .MuiFormControl-root using an XPath selector
    cy.xpath("(//*[contains(@class, 'MuiFormControl-root')])[last()]");

    // Locate the first name field using an XPath selector
    cy.xpath("//input[@id='firstName']");

    // Locate all elements with the class .MuiTextField-root using an XPath selector
    cy.xpath("//*[contains(@class, 'MuiTextField-root')]");

    // Locate the first name field using an XPath selector
    cy.xpath("//input");

    // Locate all elements on the page using an XPath selector
    cy.xpath("//*");

    // Locate the first name field using an XPath selector
    cy.xpath("//input[contains(@class, 'MuiInputBase-input')]");

    // Locate the first child of the form element using an XPath selector
    cy.xpath("//form/*[1]").should("have.class", "MuiFormControl-root");

    // Locate the last child of the form element using an XPath selector
    cy.xpath("//form/*[last()]").should("have.class", "MuiGrid-root");
  });
});
