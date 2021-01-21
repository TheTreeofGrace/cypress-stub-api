/*globals Cypress cy*/

describe('Feedback Form Tests', () => {
    const submitBtn = '[data-qa="submitBtn"]';

    it('should send API request and display Error component', () => {
        cy.intercept('POST', '/your-backend-api').as('backendAPI');
        cy.visit(Cypress.env('HOST'));
        cy.get(submitBtn).should('be.visible');
        cy.get(submitBtn).click();

        cy.wait('@backendAPI').then(xhr => {
            expect(xhr.response.statusCode).to.equal(404);
        });
        cy.get('h1').should('contain', 'Oops something went wrong!');
        cy.get('h1').should('not.contain', 'Feedback Form');
    });

    // TO DO: test the sucess path of this application by using cy.intercept! 
    // Don't mock or touch the code!
});
