class MenuPage {
    validateCobrançaMenu() {
        cy.get('#menu-lateral-COBRANCA').click();
    }
  
    validarPendencias() {
        cy.get('#item-menu-1').click();
        cy.get('#btn-card-2 > .card-titulo-texto').click();
        cy.get('#bt-filtro-em-aberto > .ng-star-inserted').click();
        cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .mt20 > .wb-lg-12 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-21 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .mt-20 > :nth-child(1) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('.mat-calendar-arrow').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="janeiro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="1 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .mt-20 > :nth-child(2) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle').click();
        cy.get('.mat-calendar-arrow').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="fevereiro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="18 de fevereiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .rodape-buttons > :nth-child(2)').click();
        cy.get('#mat-tab-content-1-0 > div > div > conteudo-modal-pendencia > div > div.ng-star-inserted > conteudo-pendencia-debito > div > div.ng-star-inserted > div:nth-child(1) > box-informacoes > section > div.btn__mostrarMais.ng-star-inserted > button > fa-icon > svg').click();
        cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('.mega-menu > :nth-child(3)').click();
        cy.get('#select-tipo-pessoa > .mat-icon').click();
        cy.get('#select-tipo-pessoa-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
        cy.get('#select-acao-desejada').click();
        cy.get('#select-acao-desejada-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
        cy.get('.w-col-1 > w-button > .btn > .ng-star-inserted').click();
        cy.get('.ml50 > .btn').click();
    }
  
    calcularJurosPendencias() {
      
  }
  
  }
  export default MenuPage;