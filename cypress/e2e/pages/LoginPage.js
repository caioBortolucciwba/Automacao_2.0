// let urlBase = "https://dnew";  // ALTERAR PARA BASE URL QUE DESEJA UTILIZAR.

class LoginPage {
  visit() {
<<<<<<< HEAD
    cy.visit('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979');
=======
    cy.visit(`https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979`);
>>>>>>> ee9ad7bd4c7bf3213c3439692cb0e430cca95e57
  }

  fillUsername(username) {
    cy.get('#mat-input-0').type(username); 
  }

  fillPassword(password) {
    cy.get('#mat-input-1').type(password); 
  }
//teste
  submit() {
    cy.get('.btn > .ng-star-inserted > span').click(); 
  }
}

export default LoginPage;