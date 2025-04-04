class Parcial {
  AcessarCobranca() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    cy.get('#item-menu-1 ').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAAA"] > .label-option').click();

    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-arrow').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-arrow').click();
    cy.get('[aria-label="2025"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="janeiro 2025"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="31 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
    cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > menu-right-filtro > div.menu-right-filtro.menu-aberto.sidebar-grande > app-form-filtro-gestao-cobranca > div > mat-dialog-actions > div > div:nth-child(2) > w-button > button').click();
    cy.get(':nth-child(2) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(1) > box-informacoes > section > div.btn__mostrarMais.ng-star-inserted > button').click();
    cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="12 - Grafeno - 274 AG 0001 C/C"] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();
    cy.get('#mat-input-32').clear().type('45030')
    cy.get('#mat-input-34').clear().type('50000');
    cy.get('#mat-input-35').clear().type('100000');
    cy.get('#check-multa').click();
    cy.get('#check-juros-de-mora').click();
    cy.get('#check-tarifa-liq').click();
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calculoParcial() {
    cy.get('[data-label="Valor"]').invoke('text').then((valoOriginalText) => {
      const valoOriginal = parseFloat(valoOriginalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

      cy.get('[data-label="Valor Pago"] > span').invoke('text').then((valorPagoText) => {
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

                  //Correção no cálculo das porcentagens
                  let multaCalculada = multa; // Multa já vem no valor correto
                  let jurosCalculado = 0;

                  if (prazo > 30) {
                    jurosCalculado = juros; // Juros já estão calculados corretamente
                  } else {
                    jurosCalculado = juros * (prazo / 30); // Ajusta para prazos menores
                  }

                  let valorCalculado = valoOriginal - valorPago
                  let calculoFinal = valorCalculado + multaCalculada + jurosCalculado + despesas;

                  //Arredondamento correto
                  calculoFinal = Math.round(calculoFinal * 100) / 100;
                  const valorAtualizadoArredondado = Math.round(valorAtualizado * 100) / 100;

                  //Logs para depuração
                  cy.log(`Valor Original: ${valoOriginal}`);
                  cy.log(`Valor Pago: ${valorPago}`);
                  cy.log(`Multa: ${multa} | Multa Calculada: ${multaCalculada}`);
                  cy.log(`Juros: ${juros} | Juros Calculados: ${jurosCalculado}`);
                  cy.log(`Prazo: ${prazo}`);
                  cy.log(`Despesas: ${despesas}`);
                  cy.log(`Valor Atualizado no Sistema: ${valorAtualizado}`);
                  cy.log(`Valor Calculado: ${calculoFinal}`);
                  cy.log(`Diferença: ${Math.abs(valorAtualizadoArredondado - calculoFinal)}`);

                  //Validação corrigida
                  expect(Math.abs(valorAtualizadoArredondado - calculoFinal)).to.be.lessThan(0.02,
                    `❌ O Valor Atualizado exibido não está correto!: Esperado ${calculoFinal}, encontrado ${valorAtualizado}`);
                  cy.log('✅ O Valor Atualizado está correto.');
                });
              });
            });
          });
        });
      });
    });

    cy.get('.conteudo-liq-manual > .footer-default > .ml50 > .btn').click();
  }

  statusParcial() {
    cy.get('#check-liquidacao > .mat-radio-label > .mat-radio-label-content').click();
    cy.get('#btn-salvar').click();
    cy.get('#btn-label-sim').click();
    cy.wait(15000);
    cy.get('#cdk-overlay-4 > snack-bar-container > app-snack-bar-default > span').should('have.text', 'Liquidação realizada com sucesso ');
  }


}

export default Parcial;
