import LoginPages from "../pages/login.pages";

describe('Login Page UI Test', () => {
  const loginPage = new LoginPages();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('should allow typing into inputs', function () {
    loginPage.typeUsername(username)
    loginPage.typePassword(password)
    loginPage.clickLogin();
    loginPage.todoHeader().should('be.visible')
  });

});
