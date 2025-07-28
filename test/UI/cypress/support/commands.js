// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import LoginPages from "../Pages/login.pages";

import LoginPages from "../pages/login.pages";

Cypress.Commands.add('loginWithFixture', function () {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    const loginPpage = new LoginPages()
    loginPpage.typeUsername(username);
    loginPpage.typePassword(password);
    loginPpage.clickLogin();
  
  });
