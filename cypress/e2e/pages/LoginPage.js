let urlBase = "https://dnew";  // ALTERAR PARA BASE URL QUE DESEJA UTILIZAR.

class LoginPage {
  visit() {
    cy.visit(`${urlBase}.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979`);
  }

 urlBaseUtilizada(){
    return (`${urlBase}`);
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