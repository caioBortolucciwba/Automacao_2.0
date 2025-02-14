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
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();

    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-checkbox-6 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="12 - Grafeno - 274 AG 0001 C/C"] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();

    cy.get('#mat-input-34').clear().type('50000');
    cy.get('#mat-input-35').clear().type('100000');
    cy.contains('label', 'Gerar como pendência').find('input[type="checkbox"]').check({ force: true });


    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
    cy.get('.conteudo-liq-manual > .footer-default > .ml50 > .btn').click();
    cy.get('#btn-label-sim > .ng-star-inserted > span').click();
   
  }

  calcularJuros() {
    
    return this.obterValorMonetario('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(7) > span').then((valorPago) => {
      return this.obterValorPorcentagem(':nth-child(3) > #input-multa > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').then((multa) => {
        return this.obterValorPorcentagem('#input-juros-de-mora > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').then((juros) => {
          return this.obterValorNumerico('[data-label="Prazo"]').then((prazo) => {
            return this.obterValorMonetario('[data-label="Despesas"] > :nth-child(1)').then((despesas) => {
              return this.obterValorMonetario('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(13) > span').then((valorAtualizado) => {
               
                // Cálculo correto dos valores
                const valorMulta = valorPago * (multa / 100);
                const valorJuros = valorPago * (juros / 100) * prazo;
                const valorCalculado = valorPago + valorMulta + valorJuros + despesas;
               
                // Log para depuração
                cy.log(`Valor Pago: ${valorPago}`);
                cy.log(`Multa: ${multa}`);
                cy.log(`Juros: ${juros}`);
                cy.log(`Prazo: ${prazo}`);
                cy.log(`Despesas: ${despesas}`);
                cy.log(`Valor Multa: ${valorMulta}`);
                cy.log(`Valor Juros: ${valorJuros}`);
                cy.log(`Valor Calculado: ${valorCalculado}`);
                cy.log(`Valor Atualizado: ${valorAtualizado}`);

                return cy.wrap({
                  valorPago,
                  multa,
                  juros,
                  prazo,
                  despesas,
                  valorMulta,
                  valorJuros,
                  valorCalculado,
                  valorAtualizado
                });
              });
            });
          });
        });
      });
    });
  }

  obterValorMonetario(seletor) {
    return cy.get(seletor).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.'));
    });
  }

  obterValorPorcentagem(seletor) {
    return cy.get(seletor).invoke('val').then((text) => {
      if (!text) return 0; // Se o valor estiver vazio ou for null, retorna 0
      return parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.')) / 100 || 0;
    });
  }


  obterValorNumerico(seletor) {
    return cy.get(seletor).invoke('text').then((text) => {
      return parseInt(text.replace(/[^\d]/g, ''), 10);
    });
  }

  verificarValorAtualizado(valorAtualizado, valorCalculado) {
    const diferenca = Math.abs(valorAtualizado - valorCalculado);

    cy.log(`Diferença entre os valores: ${diferenca}`);

    expect(diferenca).to.be.lessThan(0.01, `O Valor Atualizado exibido não está correto! Diferença: ${diferenca}`);
    cy.log('✅ O Valor Atualizado está correto.');

  }

  finalizarGestaoPendencia() {
    cy.get('#menu-lateral-COBRANCA > .flex-column > .menu-click-js').click();
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-2 > .card-titulo-texto').click();
    cy.get('#bt-filtro-em-aberto > .ng-star-inserted').click();
    cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .mt20 > .wb-lg-12 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
    cy.get('#select-empresa-carteira').click();
    cy.contains('.w-option mat-option .mat-option-multiple', 'PROPRIA - Karina FAC ').click();
    cy.get('body').type('{esc}');
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('[aria-label="28 de fevereiro de 2025"] > .mat-calendar-body-cell-content').click();
    cy.get('#mat-chip-list-6').type('211112');
    cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .rodape-buttons > :nth-child(2) > w-button > #bt-limpar-filtro').click();
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('.selectAll').click();
    cy.get(':nth-child(3) > #item-2').click();
    cy.get('#select-tipo-pessoa > .mat-icon').click();
    cy.get('#select-tipo-pessoa-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
    cy.get('#select-acao-desejada > .mat-icon').click();
    cy.get('#select-acao-desejada-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
    cy.get('#mat-input-53').clear().type('50000');
    cy.get('.w-col-1 > w-button > .btn > .ng-star-inserted').click();
 
    return this.obterValorMonetarioPen('.mt30 > w-table > .ng-untouched > .wba-table > tbody > :nth-child(1) > [data-label="Valor"]').then((valorPagoPendencia) => {
      return this.obterValorMonetarioPen(':nth-child(1) > [data-label="Juros de mora"] > span').then((valorJurosPendencia) => {
        return this.obterValorMonetarioPen(':nth-child(1) > [data-label="Valor atualizado"] > span').then((valorAtualizadoPen) => {
          cy.wait(30000);
          // Cálculo correto dos valores
          const valorCalculadoPen = valorPagoPendencia + valorJurosPendencia;
         
          // Log para depuração
          cy.log(`Valor Pago: ${valorPagoPendencia}`);
          cy.log(`Juros: ${valorJurosPendencia}`);
          cy.log(`Valor atualizado: ${valorAtualizadoPen}`);
          return cy.wrap({
            valorPagoPendencia,
            valorJurosPendencia,
            valorCalculadoPen,
            valorAtualizadoPen
          });
        });
      });
    });
    
  }

  obterValorMonetarioPen(seletor) {
    return cy.get(seletor).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.'));
    });
  }

  verificarValorAtualizadoPen(valorAtualizadoPen, valorCalculadoPen) {
    const diferenca = Math.abs(valorAtualizadoPen - valorCalculadoPen);
  
    cy.log(`Diferença entre os valores: ${diferenca}`);
  
    expect(diferenca).to.be.lessThan(0.01, `O Valor Atualizado exibido não está correto! Diferença: ${diferenca}`);
    cy.log('✅ O Valor Atualizado está correto.');
  }
}
export default MenuPage;