class LiquidacaoLote {
    validateCobrançaMenu() {
      cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    }
  
    validarCamposCobranca() {
        cy.get('#item-menu-1 ').click();
        cy.get('#btn-card-1 > .card-titulo-texto').click();
        cy.get('#bt-filtrar-titulos').click();
        cy.get('#select-empresa-carteira > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAA"] > .check-multiple').click();
        cy.get('.menu-right-filtro').click();
        cy.get('#input-vencimento').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('[aria-label="1 de outubro de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('#input-ate').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('.wb-row > :nth-child(2) > w-button > .btn').click();
        cy.get(':nth-child(4) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado').click();
        cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(4) > div > div.d-block > w-table > form > table > thead > tr > th:nth-child(1) > span').click();
        cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(4) > div > div.d-block > w-table > form > table > thead > tr > th:nth-child(1) > span').click();
        cy.get(':nth-child(7) > #item-6').click();
        cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="12 - Grafeno - 274 AG 0001 C/C"] > .label-option').click();
        cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();
        cy.get('#mat-input-34').clear().type('50000');
        cy.get('#mat-input-35').clear().type('100000');
        cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
    }
  
    calcularJuros() {
        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-new-liq-lote > div > div > box-informacoes > section > article:nth-child(2) > div > span').invoke('text').then((valorPagoText) => {
          cy.get('.conteudo-liq-manual > :nth-child(4) > box-informacoes > .card-box-informacoes > :nth-child(4) > .d-flex > span').invoke('text').then((multaText) => {
            cy.get('.conteudo-liq-manual > :nth-child(4) > box-informacoes > .card-box-informacoes > :nth-child(3) > .d-flex > span').invoke('text').then((jurosText) => {
            cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-new-liq-lote > div > div > div > w-table > form > table > tbody > tr:nth-child(1) > td:nth-child(5) > span').invoke('text').then((prazoText) => {
              cy.get(':nth-child(1) > [data-label="Despesas adicionais"] > :nth-child(1)').invoke('text').then((despesasText) => {
                cy.get(':nth-child(6) > .d-flex > span').invoke('text').then((valorAtualizadoText) => {
                  
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
      cy.get('.conteudo-liq-manual > .footer-default > .ml50 > .btn > .ng-star-inserted').click();
      cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }
  }
  
  export default LiquidacaoLote;
  