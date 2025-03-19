class LoginPainelClientePage {
    visit() {
      cy.visit('https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=ab46923f-34bc-47dd-9d07-c73f2c93bb29&response_mode=fragment&response_type=code&scope=openid&nonce=819aa27a-a74d-48ee-9843-f1a359739a67');
    }
  
    loginUsuario() {
      cy.get('#inputCpf2').type(48247084430); 
    }
  
    senha() {
      cy.get('#password').type(48247084430); 
    }
  
    submit() {
      cy.get('.bt-default').click(); 
    }
  }
  export default LoginPainelClientePage;
  