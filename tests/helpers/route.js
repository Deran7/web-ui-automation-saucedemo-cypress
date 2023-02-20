export const BASE_URL = {
    DASHBOARD: Cypress.env('baseUrl'),
    INVENTORY: Cypress.env('baseUrl')
};

export function visit(routes) {
    cy.visit(BASE_URL.DASHBOARD + routes, { failOnStatusCode: false })
}

