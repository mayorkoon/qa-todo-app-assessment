import { faker } from '@faker-js/faker';

class CrudPage {
    inputItem(){
        return cy.get('input[placeholder="Add new item"]')
    }
    addBtn(){
        return cy.get('.add-btn')
    }
    editBtn(){
        return cy.get('.edit-btn')
    }
    deleteBtn(){
        return cy.get('.delete-btn')
    }
    editInput(){
        return cy.get('.text')
    }
    saveBtn(){
        return cy.get('.save-btn')
    }
    

    //actions
    typeItem(){
        this.inputItem().type(faker.lorem.sentence(4))
    }
    clickAdd(){
        this.addBtn().click()
    }
    successAdd(){
        return cy.contains('div','Item added successfully!')
    }
    clearText(){
        this.editInput().clear()
    }
    editText(){
        this.editInput().type(faker.lorem.sentence(4))
    }
    clickSave(){
        this.saveBtn().click()
    }
    successEdit(){
        return cy.contains('div','Item updated!')
    }
    clickEdit(){
        this.editBtn().click()
    }
    clickDelete(){
        this.deleteBtn().click()
    }
    successDelete(){
        return cy.contains('Item removed successfully!')
    }
}

export default CrudPage;