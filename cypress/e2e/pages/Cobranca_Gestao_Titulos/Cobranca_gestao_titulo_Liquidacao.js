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
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="31 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();

    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(1) > box-informacoes > section > div.btn__mostrarMais.ng-star-inserted > button').click();
    cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="12 - Grafeno - 274 AG 0001 C/C"] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();

    cy.get('#mat-input-34').clear().type('50000');
    cy.get('#mat-input-35').clear().type('100000');
    cy.get('#check-multa').click();
    cy.get('#check-juros-de-mora').click();
    cy.get('#check-tarifa-liq').click();
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJuros() {
    cy.wait(10000);

    cy.get('[data-label="Valor Pago"]').invoke('text').then((valorPagoText) => {
      const valorPago = parseFloat(valorPagoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

      cy.get('[data-label="Multa"]').invoke('text').then((multaText) => {
        const multa = parseFloat(multaText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

        cy.get('[data-label="Juros de mora"]').invoke('text').then((jurosText) => {
          const juros = parseFloat(jurosText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

          cy.get('[data-label="Prazo"]').invoke('text').then((prazoText) => {
            const prazo = parseInt(prazoText) || 0;

            cy.get('[data-label="Despesas"]').invoke('text').then((despesasText) => {
              const despesas = parseFloat(despesasText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

              cy.get('[data-label="Valor Atualizado"]').invoke('text').then((valorAtualizadoText) => {
                const valorAtualizado = parseFloat(valorAtualizadoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

                let multaCalculada = multa;
                let jurosCalculado = prazo > 30 ? juros : juros * (prazo / 30);
                let valorCalculado = valorPago + multaCalculada + jurosCalculado + despesas;

                valorCalculado = Math.round((valorCalculado + Number.EPSILON) * 100) / 100;
                const valorAtualizadoArredondado = Math.round((valorAtualizado + Number.EPSILON) * 100) / 100;

                // Logs para depuração
                cy.log(`Valor Pago: ${valorPago}`);
                cy.log(`Multa: ${multa} | Multa Calculada: ${multaCalculada}`);
                cy.log(`Juros: ${juros} | Juros Calculados: ${jurosCalculado}`);
                cy.log(`Prazo: ${prazo}`);
                cy.log(`Despesas: ${despesas}`);
                cy.log(`Valor Atualizado no Sistema: ${valorAtualizadoArredondado}`);
                cy.log(`Valor Calculado: ${valorCalculado}`);

                const valorCalculadoFinal = Number(valorCalculado.toFixed(2));
                const valorAtualizadoFinal = Number(valorAtualizado.toFixed(2));

                if (valorAtualizadoFinal === valorCalculadoFinal) {
                  cy.log('✅ O Valor Atualizado está correto.');
                } else {
                  cy.log(`❌ O Valor Atualizado exibido não está correto!: Esperado ${valorCalculadoFinal}, encontrado ${valorAtualizadoFinal}`);
                  expect(valorAtualizadoFinal).to.equal(valorCalculadoFinal);
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
