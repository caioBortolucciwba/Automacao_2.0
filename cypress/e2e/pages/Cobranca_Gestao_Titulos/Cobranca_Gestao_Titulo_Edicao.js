class Edicao {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposEdicao() {
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
    cy.get('#item-10').click();
    cy.get('.ng-invalid > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Carteira"]').click();
    cy.get('#btn-alterar > .ng-star-inserted').click();
    cy.get('#btn-alt-vencimento > .ng-star-inserted').click();
    cy.get('#btn-label-sim > .ng-star-inserted > span').click();
  }

  validarEdicaoLotes() {
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get("#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(1) > div > div.d-block > w-table > form > table > tbody > tr > td:nth-child(12) > span > span > fa-icon:nth-child(1) > svg").click();
    
  }

  finalizaEdicao() {

  }

}

export default Edicao;