/*globals Cypress cy*/

describe('Feedback Form Tests', () => {
    const submitBtn = '[data-qa="submitBtn"]';

    it('should send API request and display Error component', () => {
        let dynamicStatusCodeStub = 404;
        cy.intercept('POST', '/your-backend-api', (req) => {
            req.reply({
                statusCode: dynamicStatusCodeStub, 
            });
        }).as('backendAPI');

        cy.visit(Cypress.env('HOST'));

        cy.get(submitBtn).should('be.visible');
        cy.get(submitBtn).click();

        cy.wait('@backendAPI').then(xhr => {
            expect(xhr.response.statusCode).to.equal(404);
            dynamicStatusCodeStub = 200;
        });
        cy.get('h1').should('contain', 'Oops something went wrong!');
        cy.get('h1').should('not.contain', 'Feedback Form');

        cy.reload();
        
        cy.get(submitBtn).should('be.visible');
        cy.get(submitBtn).click();

        cy.wait('@backendAPI').then(xhr => {
            expect(xhr.response.statusCode).to.equal(200);
        });

        cy.get('h1').should('contain', 'Thank you for your feedback!');
        cy.get('h1').should('not.contain', 'Feedback Form');
        cy.get('h1').should('not.contain', 'Oops something went wrong!');
    });
});
