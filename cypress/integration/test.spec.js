/*globals Cypress cy*/

describe('Feedback Form Tests', () => {
    const submitBtn = '[data-qa="submitBtn"]';

    it('should send API request and display Error component', () => {
        cy.visit(Cypress.env('HOST'));
        cy.get(submitBtn).should('be.visible');
        cy.get(submitBtn).click();
    });

    // TO DO: test the sucess path of this application by using cy.intercept! 
    // You don't need to mock or touch the code!
});
