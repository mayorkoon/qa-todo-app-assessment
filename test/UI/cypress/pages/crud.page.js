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
    constructor(){
        this.createTodo = ''
        this.editTodo = ''
    }
    typeItem(){
        const todo = faker.word.words(3)
        this.createTodo = todo
        this.inputItem().type(todo)
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
        const todo = faker.word.words(3)
        this.editTodo = todo
        this.editInput().type(todo)
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
    getCreatedTodo(){
        return this.createTodo
    }
    getEdited(){
        return this.editTodo
    }
}

export default CrudPage;