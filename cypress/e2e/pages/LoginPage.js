class LoginPage {
    visit() {
      cy.visit('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979');
    }
  
    fillUsername(username) {
      cy.get('#mat-input-0').type(username); 
    }
  
    fillPassword(password) {
      cy.get('#mat-input-1').type(password); 
    }
  
    submit() {
      cy.get('.btn > .ng-star-inserted > span').click(); 
    }
  }
  
  export default LoginPage;
  