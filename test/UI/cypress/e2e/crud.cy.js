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
        crudActions.successAdd().should('be.visible');
    })

    it("Edits an item",()=>{
        crudActions.clickEdit();
        crudActions.clearText()
        crudActions.editText();
        crudActions.clickSave();
        crudActions.successEdit().should('be.visible');
    })

    it("Deletes an item", ()=>{
        crudActions.clickDelete();
        crudActions.successDelete().should('be.visible');
    })

}) 
