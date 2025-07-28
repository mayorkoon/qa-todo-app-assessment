import CrudPage from "../pages/crud.page";
//import { faker } from '@faker-js/faker';


describe("The CRUD test suite", ()=>{

    const crudActions = new CrudPage()
    before(()=>{
        cy.clearLocalStorage()
        cy.visit('/');
        cy.loginWithFixture();
    })

    it("Create an item", ()=>{
        crudActions.typeItem();
        crudActions.clickAdd();
        crudActions.successAdd().should('be.visible'); // Verify the successful toast
        cy.contains(crudActions.getCreatedTodo()).should('be.visible') // Assert that the created item is visible on the list
    })

    it("Edits an item",()=>{
        crudActions.clickEdit();
        crudActions.clearText()
        crudActions.editText();
        crudActions.clickSave();
        crudActions.successEdit().should('be.visible'); // Verify the successful toast
        cy.contains(crudActions.getEdited()).should('be.visible') // Assert that the Edited item is visible on the list
    })

    it("Deletes an item", ()=>{
        crudActions.clickDelete();
        crudActions.successDelete().should('be.visible'); // Verify the successful toast
        cy.contains(crudActions.getEdited()).should('not.exist')
    })

}) 
