
class PainelCliente {
    painelClienteCriaOperacaoCedenteCtos() {
      cy.wait(300);
      cy.get('#menu-lateral-OPERACIONAL').click();
      cy.get('.sub-header > :nth-child(2) > w-button > .btn').click();
      cy.get('#select-modal-empresa-criar > .w-select > .w-select-input > .mat-icon').click();
      cy.get('#select-modal-empresa-criar > .w-select > .overlay > .w-select-list > wba-option.ng-star-inserted > .label-option').click();
      cy.get('#select-modal-op-carteira-criar > .w-select > .w-select-input > .mat-icon').click();
      cy.get('#select-modal-op-carteira-criar > .w-select > .overlay > .w-select-list > wba-option.ng-star-inserted > .label-option').click();
      cy.get('#btn-label-sim').click();
     
    }
    painelClienteCriaOperacaoPainlCedenteCtos(){
      cy.get('.mega-menu > :nth-child(1) > #item-0').click();
      cy.get('.w-select-input > .mat-icon').click();
      cy.contains('Conhecimento de Transporte OS').click();
      cy.get('#mat-input-19').type('5555555555');
      cy.get('#mat-input-20').type('5555555555');
      cy.get(':nth-child(1) > .w-input > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #input-data').click();
      cy.get("#mat-datepicker-8 > div > mat-month-view > table > tbody > tr:nth-child(6) > td:nth-child(2) > button > div.mat-calendar-body-cell-content.mat-focus-indicator").click();
      cy.get('#input-sacado').type('teste');
      cy.get('#mat-option-22 > .mat-option-text').click();
      cy.wait(3000);
      cy.get('#btn-label-incluir').scrollIntoView();
      cy.get('#btn-label-incluir').click();
      cy.get('.conteudo-add-titulo > .footer-default > .d-flex > div > w-button > #btn-label-sim > .ng-star-inserted').click();
      cy.get('#btn-label-sim').click();
      cy.get('step-dois-conteudo.ng-star-inserted > .footer-default > .d-flex > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
      //
    }

      
     paginaWbaWebCtos() {
          Cypress.on('uncaught:exception', (err, runnable) => {
              console.error('Erro capturado:', err.message);
              return false; 
          });
  
          cy.origin('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979', () => {
              cy.visit('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979');
              cy.get('#mat-input-0').type('admin');
              cy.get('#mat-input-1').type('Wbaweb@1234');
              cy.get('.btn > .ng-star-inserted > span').click();
              cy.get('#menu-lateral-OPERACIONAL > .flex-column > .menu-click-js').click();
              cy.get('#item-menu-1 > span').click();
              cy.contains('R$ 55.555.555,55');
              cy.contains('PORTAL');
          });
      }
  
      PainelCLienteConcluido() {
          cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
      }
  }
  
  export default PainelCliente;





























   // PaginaWbaWeb() {

    //  Cypress.on('uncaught:exception', (err, runnable) => {
   //       console.error('Erro capturado:', err.message);
   ///       return false; 
 //     });

 //     cy.origin('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979', () => {
  //        cy.visit('https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979');

      

////    PainelCLienteConcluido() {
 //       cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
//   }
//}



//export default PainelCliente;