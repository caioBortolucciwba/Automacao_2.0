class Edicao {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarExportacao() {
    // Abertura e seleção de campos no menu Cobrança
    cy.get('#item-menu-1 ').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    // Seleção de empresa/carteira
    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > :nth-child(5) > .label-option').click();

    // Aplicação de filtros de data
    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-arrow').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-arrow').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();

    // Confirmação dos filtros aplicados
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();

    // Seleção de título e preenchimento de campos
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get('#item-11').click();
    cy.get('.wb-lg-5 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
    cy.contains('Todas as colunas').click();
    cy.get('#mat-input-29').type('caio.bortolucci@wba.com.br');
    cy.get('#btn-filtro > .ng-star-inserted').click();

  }

  finalizaEdicao() {
    ///Colocar a finalizacao
  }

}

export default Edicao;