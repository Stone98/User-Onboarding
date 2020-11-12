describe('Users app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheck = () => cy.get('input[name="terms"]')
    const submitButton = () => cy.get('#submitBtn');
    it('playing around with selecting elements from the DOM', () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsCheck().should("exist");
        submitButton().should("exist");
        cy.contains("Add a User");
        cy.contains("User Onboarding");
    });
    it('can type in the inputs and check box', () => {
        // grab the inputs
        // assert they are empty
        // type in them
        // assert that the thing we typed is there
        nameInput()
            .should("have.value", "")
            .type("Stone Cogswell")
            .should("have.value", "Stone Cogswell")
        emailInput()
            .should("have.value", "")
            .type("stone@cogswell.com")
            .should("have.value", "stone@cogswell.com")
        passwordInput()
            .should("have.value", "")
            .type("J. R. R. Tolkien")
            .should("have.value", "J. R. R. Tolkien")
        termsCheck()
            .click()
    });
    it('submit button disabled until all inputs filled out and box checked', () => {
        // setup, making sure that initial state is legit
        // act (type or click - mimicking user input)
        // assert that the action had the expected effect
        // syntax you will need:
        // "be.disabled"
        // ".clear()"
        submitButton()
            .should("be.disabled")
        nameInput()
            .should("have.value", "")
        emailInput()
            .should("have.value", "")
        passwordInput()
            .should("have.value", "")
        submitButton()
            .should("be.disabled")
        nameInput()
            .type("Stone Cogswell")
        submitButton()
            .should("be.disabled")
        emailInput()
            .type("stone@cogswell.com")
        submitButton()
            .should("be.disabled")
        passwordInput()
            .type("J. R. R. Tolkien")
        submitButton()
            .should("be.not.disabled")
        termsCheck()
            .click()
        submitButton()
            .should("be.not.disabled")
            .click()
        nameInput()
            .clear()
        emailInput()
            .clear()
        passwordInput()
            .clear()
        submitButton()
            .should("be.disabled")
    });
    it('test input validation', () => {
        submitButton()
            .should("be.disabled")
        nameInput()
            .should("have.value", "")
        emailInput()
            .should("have.value", "")
        passwordInput()
            .should("have.value", "")
        submitButton()
            .should("be.disabled")
        nameInput()
            .type(" ")
        submitButton()
            .should("be.disabled")
        emailInput()
            .type(" ")
        submitButton()
            .should("be.disabled")
        passwordInput()
            .type(" ")
        submitButton()
            .should("be.disabled")
    });
})