class Abatimento {
    validateCobrançaMenu() {
      cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    }
  
    validarCamposAbatimento() {
      // Abertura e seleção de campos no menu Cobrança
      cy.get('#item-menu-1 > span').click();
      cy.get('#btn-card-1 > .card-titulo-texto').click();
      cy.get('#bt-filtrar-titulos').click();
  
      // Seleção de empresa/carteira
      cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
      cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAA"] > .check-multiple').click();
  
      // Aplicação de filtros de data
      cy.get('.menu-right-filtro').click();
      cy.get('#input-vencimento').click();
      cy.get('.mat-calendar-previous-button').click();
      cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
      cy.get('#input-ate').click();
      cy.get('.mat-calendar-previous-button').click();
      cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
  
      // Confirmação dos filtros aplicados
      cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
  
      // Seleção de título e preenchimento de campos
      cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
      cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
      cy.get(':nth-child(4) > #item-3').click();
      cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('1000000');
      cy.get('.w-row > :nth-child(5) > w-button > .btn > .ng-star-inserted').click();
    }

    tituloAbatimento() {
        
    }
  
  }
  
  export default Abatimento;
  