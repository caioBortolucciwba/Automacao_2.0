class Protesto {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposProtesto() {
    // Abertura e seleção de campos no menu Cobrança
    cy.get('#item-menu-1 ').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    // Seleção de empresa/carteira
    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAAA"]').click();

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
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    // Confirmação dos filtros aplicados
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();

    // Seleção de título e preenchimento de campos
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
    cy.get(':nth-child(6) > #item-5').click();
    cy.get('#mat-input-29').clear().type('2000');
    cy.get('#select-protesto > .w-select > .w-select-input > :nth-child(2)').click();
    cy.get('[ng-reflect-label="Protesto 01"] > .label-option').click();
    cy.get('.w-row > :nth-child(4) > w-button > .btn > .ng-star-inserted').click();
  }

  finalizaProtesto() {
    cy.wait(10000);
    cy.get('[data-label="Valor"] > span').invoke('text').then((valorTotalText) => {
      const valorTotal = parseFloat(valorTotalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

      cy.get('[data-label="Tarifa"] > span').invoke('text').then((tarifaText) => {
        const tarifa = parseFloat(tarifaText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

        cy.get('[data-label="Custos"]').invoke('text').then((custosText) => {
          const custos = parseFloat(custosText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

          //Logs para depuração
          cy.log(`Valor: ${valorTotal}`);
          cy.log(`Tarifa: ${tarifa}`);
          cy.log(`Custos: ${custos}`);
        });
      });
    });
  }

}

export default Protesto;
