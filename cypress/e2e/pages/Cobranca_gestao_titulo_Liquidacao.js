class MenuPage {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposCobranca() {
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAA"] > .check-multiple').click();

    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();

    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
    cy.get('#select-tipo-pessoa > .w-select > .overlay > .w-select-list > :nth-child(4) > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();

    cy.get('#mat-input-33').clear().type('50000');
    cy.get('#mat-input-34').clear().type('100000');
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJuros() {
  

    cy.get('[data-label="Valor Pago"] > span').invoke('text').then((valorPagoText) => {
      cy.get(':nth-child(3) > #input-multa > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').invoke('text').then((multaText) => {
        cy.get('#input-juros-de-mora > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').invoke('text').then((jurosText) => {
          cy.get('[data-label="Prazo"]').invoke('text').then((prazoText) => {
            cy.get('[data-label="Despesas"] > :nth-child(1)').invoke('text').then((despesasText) => {
              cy.get('[data-label="Valor Atualizado"] > span').invoke('text').then((valorAtualizadoText) => {
                
                // Remove os formatos de moeda/porcentagem e converte os valores para número
                const valorPago = parseFloat(valorPagoText.replace(/[^\d,.-]/g, '').replace(',', '.'));
                const multa = parseFloat(multaText.replace(/[^\d,.-]/g, '').replace(',', '.'));
                const juros = parseFloat(jurosText.replace(/[^\d,.-]/g, '').replace(',', '.'));
                const prazo = parseInt(prazoText.replace(/[^\d]/g, ''), 10); 
                const despesas = parseFloat(despesasText.replace(/[^\d,.-]/g, '').replace(',', '.'));
                const valorAtualizado = parseFloat(valorAtualizadoText.replace(/[^\d,.-]/g, '').replace(',', '.'));

                // Calcula o valor esperado considerando o prazo
                const valorCalculado = valorPago 
                       + Number((valorPago * multa / 100).toFixed(2)) 
                       + Number((valorPago * juros / 100 * prazo).toFixed(2)) 
                       + despesas;

                // Verifica se o valor atualizado exibido está correto
                if (Math.abs(valorAtualizado - valorCalculado) > 0.01) {
                  throw new Error('O Valor Atualizado exibido não está correto!');
                } else {
                  cy.log('O Valor Atualizado está correto.');
                }
              });
            });
          });
        });
      });
    });
  }
}

export default MenuPage;
