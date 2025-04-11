class Renegociacao {
    validateCobrançaMenu() {
      cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    }
  
    validarCamposRenegociacao() {
      // Abertura e seleção de campos no menu Cobrança
      cy.get('#item-menu-1').click();
      cy.get('#btn-card-1 > .card-titulo-texto').click();
      cy.get('#bt-filtrar-titulos').click();
  
      // Seleção de empresa/carteira
      cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
      cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > :nth-child(5) > .label-option').click();
  
      // Aplicação de filtros de data
      cy.get('.menu-right-filtro').click();
      cy.get('#input-vencimento').click();
      cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
      cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
      cy.get('#input-ate').click();
      cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
      cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
  
      // Confirmação dos filtros aplicados
      cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
  
      // Seleção de título e preenchimento de campos
      cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
      cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(1) > div > div.d-block > w-table > form > table > tbody > tr:nth-child(1) > td:nth-child(1) > span').click();
      cy.get(':nth-child(8) > #item-7').click();
      cy.get('.conteudo-atualizacao-de-valores > mega-menu > .mega-menu > li.ng-star-inserted > #item-0').click();
      cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('20000');
      cy.get('#input-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Testando QA');
      cy.get('#btn-adicionar > .ng-star-inserted').click();
      cy.get('#btn-voltar > .ng-star-inserted').click();  
      cy.get('#mat-input-14').clear();
      cy.get('#mat-input-14').type('100000');
     cy.get('#mat-input-15').clear();
     cy.get('#mat-input-15').type('50000');
      cy.get(':nth-child(3) > #input-valorPresente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear();
      cy.get(':nth-child(3) > #input-valorPresente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('33400');
      cy.get('.mt20 > .ui-g-4 > #input-valorPresente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear();
      cy.get('.mt20 > .ui-g-4 > #input-valorPresente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('14000');
      cy.get('#bt-recalcular > .ng-star-inserted').click();
    }

    finalizaRenegociacao() {    
        cy.get('conteudo-atualizacao-de-valores > .conteudo-atualizacao-de-valores > .footer-default > w-button.ml50 > .btn > .ng-star-inserted').click();
        cy.get('.fl > form.ng-invalid > :nth-child(1) > :nth-child(1)').type('1228179260');
        cy.get('#input-qtdeParcelas > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('5');
        cy.get('#select-periodicidade').click();
        cy.get('#select-periodicidade-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
        cy.get('#select-modoCobranca').click();
        cy.get('#select-modoCobranca-item-box-select > .check-list__unselected-list > :nth-child(3)').click();
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click();
        cy.contains('12 - Grafeno - 274 AG 0001 C/C 08134319-6').click();
        cy.get('body').type('{esc}');
        cy.get(':nth-child(5) > :nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.contains('Dinheiro').click();
        cy.get('body').type('{esc}');
        cy.get('#bt-alterar > .ng-star-inserted').click();
        
    }
  
  }
  
  export default Renegociacao;
  