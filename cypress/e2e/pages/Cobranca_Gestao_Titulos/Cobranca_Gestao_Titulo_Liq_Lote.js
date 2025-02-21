class LiquidacaoLote {
    validateCobrançaMenu() {
      cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
      cy.get('#item-menu-1 > span').click();
      cy.get('#btn-card-1 > .card-titulo-texto').click();
      cy.get('#bt-filtrar-titulos').click();
    }
  
    validarLote() {
      ///////Filtrar titulos
      cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
      cy.get('[ng-reflect-label="PROPRIA - Karina FAC"] > .check-multiple').click();
      cy.get('.menu-right-filtro').click();
      cy.get('#input-vencimento').click();
      cy.get('.mat-calendar-previous-button').click();
      cy.get('.mat-calendar-previous-button').click();
      cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
      cy.get('#input-ate').click();
      cy.get('.mat-calendar-previous-button').click();
      cy.get('[aria-label="31 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
      cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();

      ///Selecionar titulos
      cy.get(':nth-child(2) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
      cy.get(':nth-child(2) > .block > .d-block > w-table.ng-star-inserted > form.ng-untouched > .wba-table > thead > tr > :nth-child(1)').click();
      cy.get(':nth-child(2) > .block > .d-block > w-table.ng-star-inserted > form.ng-untouched > .wba-table > thead > tr > :nth-child(1)').click();
      cy.get(':nth-child(7) > #item-6').click();

      ///Preenchendo campos
      cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
      cy.get('[ng-reflect-label="02 - Itaú Unibanco S.A. - 341 "] > .label-option').click();
      cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
      cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();
      cy.get('.marginTop15 > :nth-child(2) > #input-multa > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear().type('50000');
      cy.get('#input-juros-de-mora > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear().type('100000');
      cy.get('#check-multa').click();
      cy.get('#check-juros-de-mora').click();
      cy.get('#check-tarifa-liq').click();
      cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
    }
  
    calcularJurosLote() {
        cy.wait(10000);
      
        cy.get('table tbody tr').each(($row) => {  // Itera sobre todas as linhas da tabela
          cy.wrap($row).find('[data-label="Valor Pago"]').invoke('text').then((valorPagoText) => {
            const valorPago = parseFloat(valorPagoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      
            cy.wrap($row).find('[data-label="Multa"]').invoke('text').then((multaText) => {
              const multa = parseFloat(multaText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      
              cy.wrap($row).find('[data-label="Juros de mora"]').invoke('text').then((jurosText) => {
                const juros = parseFloat(jurosText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      
                cy.wrap($row).find('[data-label="Prazo"]').invoke('text').then((prazoText) => {
                  const prazo = parseInt(prazoText) || 0;
      
                  cy.wrap($row).find('[data-label="Despesas"]').invoke('text').then((despesasText) => {
                    const despesas = parseFloat(despesasText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      
                    cy.wrap($row).find('[data-label="Valor Atualizado"]').invoke('text').then((valorAtualizadoText) => {
                      const valorAtualizado = parseFloat(valorAtualizadoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      
                      // Correção no cálculo das porcentagens
                      let multaCalculada = multa; // Multa já vem no valor correto
                      let jurosCalculado = 0;
      
                      if (prazo > 30) {
                        jurosCalculado = juros; // Juros já estão calculados corretamente
                      } else {
                        jurosCalculado = juros * (prazo / 30); // Ajusta para prazos menores
                      }
      
                      let valorCalculado = valorPago + multaCalculada + jurosCalculado + despesas;
      
                      // Arredondamento correto
                      valorCalculado = Math.round(valorCalculado * 100) / 100;
                      const valorAtualizadoArredondado = Math.round(valorAtualizado * 100) / 100;
      
                      // Logs para depuração
                      cy.log(`📝 Linha processada:`);
                      cy.log(`➡ Valor Pago: ${valorPago}`);
                      cy.log(`➡ Multa: ${multa} | Multa Calculada: ${multaCalculada}`);
                      cy.log(`➡ Juros: ${juros} | Juros Calculados: ${jurosCalculado}`);
                      cy.log(`➡ Prazo: ${prazo}`);
                      cy.log(`➡ Despesas: ${despesas}`);
                      cy.log(`➡ Valor Atualizado no Sistema: ${valorAtualizado}`);
                      cy.log(`➡ Valor Calculado: ${valorCalculado}`);
                      cy.log(`➡ Diferença: ${Math.abs(valorAtualizadoArredondado - valorCalculado)}`);
      
                      // Validação corrigida
                      expect(Math.abs(valorAtualizadoArredondado - valorCalculado)).to.be.lessThan(0.02,
                        `❌ O Valor Atualizado exibido na linha não está correto!: Esperado ${valorCalculado}, encontrado ${valorAtualizado}`
                      );
                      cy.log('✅ O Valor Atualizado está correto para esta linha.');
                    });
                  });
                });
              });
            });
          });
        });
      }
      
    
    
  }
  
  export default LiquidacaoLote;
  