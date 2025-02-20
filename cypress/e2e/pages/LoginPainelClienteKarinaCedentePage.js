class LoginPainelClienteKarinaCedentePage {
    visit() {
      cy.visit('https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=c105d7a2-f248-498f-8aba-645ea981b56b&response_mode=fragment&response_type=code&scope=openid&nonce=95cf3e7c-d497-4c14-8d64-a5e02c9eaf1d');
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
  
  export default LoginPainelClienteKarinaCedentePage;
  