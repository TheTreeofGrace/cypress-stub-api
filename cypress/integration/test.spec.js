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

    it('should display Success component', () => {
        cy.intercept('POST', '/your-backend-api', {}).as('backendAPI');
        cy.visit(Cypress.env('HOST'));
        cy.get(submitBtn).should('be.visible');
        cy.get(submitBtn).click();
        cy.wait('@backendAPI').then(xhr => {
            //check we successfully intercepted this call
            expect(xhr.response.statusCode).to.equal(200);
        });
        //Check hard code text has changed. 
        //This is done because there is no CMS used for this application
        cy.get('h1').should('contain', 'Thank you for your feedback!');
        cy.get('h1').should('not.contain', 'Feedback Form');
        /* If you try to get an element with cy.get that no longer exists cypress will throw an error. 
        See for yourself by uncommenting the code below! */
        
        // cy.get(submitBtn).should('be.visible');
    });
});
