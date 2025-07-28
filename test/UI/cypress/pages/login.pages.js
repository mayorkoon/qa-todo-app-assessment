class LoginPages {
    usernameField(){
       return cy.get('input[placeholder="Username"]')
    }
    passwordField(){
        return cy.get('input[placeholder="Password"]')
    }
    loginBtn(){
        return cy.contains('button', 'Login')
    }
    todoHeader(){
        return cy.contains('h2', 'Todo App')
    }

    //actions

    typeUsername(username){
        this.usernameField().type(username)
    }
    typePassword(password){
        this.passwordField().type(password)
    }
    clickLogin(){
        this.loginBtn().click()
    }
}

export default LoginPages;