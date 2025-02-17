class MenuPage {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposCobranca() {
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

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
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="02 - Itaú Unibanco S.A. - 341 "] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();

    cy.get('#mat-input-34').clear().type('50000');
    cy.get('#mat-input-35').clear().type('100000');
    cy.contains('label', 'Gerar como pendência').find('input[type="checkbox"]').check({ force: true });


    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
    // cy.get('.conteudo-liq-manual > .footer-default > .ml50 > .btn').click();
    // cy.get('#btn-label-sim > .ng-star-inserted > span').click();
   
  }

  calcularJuros() {
    cy.wait(10000);
    cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(7) > span')
      .invoke('text').then((valorPagoText) => {      
        const valorPago = parseFloat(valorPagoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  
        cy.get('[data-label="Prazo"]').invoke('text').then((prazoText) => {      
            const prazo = parseInt(prazoText) || 0;

            cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(9) > span')
              .invoke('text').then((multaText) => {      
                const multa = parseFloat(multaText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
    
                cy.get('#input-juros-de-mora > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
                  .invoke('text').then((jurosText) => {      
                    const juros = parseFloat(jurosText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

                    cy.get('[data-label="Prazo"] > span').invoke('text').then((despesasText) => {      
                        const despesas = parseFloat(despesasText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

                        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(13) > span')
                          .invoke('text').then((valorAtualizadoText) => {      
                            const valorAtualizado = parseFloat(valorAtualizadoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

                            // Capturar fator corretamente (ajuste se necessário)
                            const fator = multa + juros; 
                            const prazoMedio = prazo; 

                            let valorCalculado;
                            if (prazo > 30) {
                                valorCalculado = (valorPago * ((fator / 100) + 1) * (prazoMedio / 30)) - valorPago;
                            } else {
                                valorCalculado = valorPago * ((fator / 100) * (prazoMedio / 30));
                            }

                            // Adicionar despesas
                            valorCalculado += despesas;

                            // Função para formatar moeda
                            const formatarMoeda = (valor) => {
                                return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                            };

                            // Logs para depuração
                            cy.log(`Valor Pago: ${formatarMoeda(valorPago)}`);
                            cy.log(`Multa: ${formatarMoeda(multa)}`);
                            cy.log(`Juros: ${formatarMoeda(juros)}`);
                            cy.log(`Prazo: ${prazo} dias`);
                            cy.log(`Despesas: ${formatarMoeda(despesas)}`);
                            cy.log(`Valor Calculado: ${formatarMoeda(valorCalculado)}`);
                            cy.log(`Valor Atualizado: ${formatarMoeda(valorAtualizado)}`);

                            // Comparação de valores
                            const diferenca = Math.abs(valorAtualizado - valorCalculado);
                            cy.log(`Diferença entre os valores: ${formatarMoeda(diferenca)}`);

                            expect(diferenca).to.be.lessThan(1, `O Valor Atualizado exibido não está correto! Diferença: ${formatarMoeda(diferenca)}`);
                            cy.log('✅ O Valor Atualizado está correto.');
                        });
                    });
                });
            });
        });
    });
}



  // finalizarGestaoPendencia() {
  //   cy.get('#menu-lateral-COBRANCA > .flex-column > .menu-click-js').click();
  //   cy.get('#item-menu-1 > span').click();
  //   cy.get('#btn-card-2 > .card-titulo-texto').click();
  //   cy.get('#bt-filtro-em-aberto > .ng-star-inserted').click();
  //   cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .mt20 > .wb-lg-12 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
  //   cy.get('#select-empresa-carteira').click();
  //   cy.contains('.w-option mat-option .mat-option-multiple', 'PROPRIA - Karina FAC ').click();
  //   cy.get('body').type('{esc}');
  //   cy.get('#input-vencimento').click();
  //   cy.get('.mat-calendar-previous-button').click();
  //   cy.get('.mat-calendar-previous-button').click();
  //   cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
  //   cy.get('#input-ate').click();
  //   cy.get('[aria-label="28 de fevereiro de 2025"] > .mat-calendar-body-cell-content').click();
  //   cy.get('#mat-chip-list-6').type('211112');
  //   cy.get('form-filtro-gestao-pendencias-aberto > .main-ctn-filter > .mat-typography > .content-ctn > .content-form > .rodape-buttons > :nth-child(2) > w-button > #bt-limpar-filtro').click();
  //   cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
  //   cy.get('.selectAll').click();
  //   cy.get(':nth-child(3) > #item-2').click();
  //   cy.get('#select-tipo-pessoa > .mat-icon').click();
  //   cy.get('#select-tipo-pessoa-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
  //   cy.get('#select-acao-desejada > .mat-icon').click();
  //   cy.get('#select-acao-desejada-item-box-select > .check-list__unselected-list > :nth-child(1)').click();
  //   cy.get('#mat-input-53').clear().type('50000');
  //   cy.get('.w-col-1 > w-button > .btn > .ng-star-inserted').click();
 
  //   return this.obterValorMonetarioPen('.mt30 > w-table > .ng-untouched > .wba-table > tbody > :nth-child(1) > [data-label="Valor"]').then((valorPagoPendencia) => {
  //     return this.obterValorMonetarioPen(':nth-child(1) > [data-label="Juros de mora"] > span').then((valorJurosPendencia) => {
  //       return this.obterValorMonetarioPen(':nth-child(1) > [data-label="Valor atualizado"] > span').then((valorAtualizadoPen) => {
  //         cy.wait(30000);
  //         // Cálculo correto dos valores
  //         const valorCalculadoPen = valorPagoPendencia + valorJurosPendencia;
         
  //         // Log para depuração
  //         cy.log(`Valor Pago: ${valorPagoPendencia}`);
  //         cy.log(`Juros: ${valorJurosPendencia}`);
  //         cy.log(`Valor atualizado: ${valorAtualizadoPen}`);
  //         return cy.wrap({
  //           valorPagoPendencia,
  //           valorJurosPendencia,
  //           valorCalculadoPen,
  //           valorAtualizadoPen
  //         });
  //       });
  //     });
  //   });
    
  // }

  // obterValorMonetarioPen(seletor) {
  //   return cy.get(seletor).invoke('text').then((text) => {
  //     return parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.'));
  //   });
  // }

  // verificarValorAtualizadoPen(valorAtualizadoPen, valorCalculadoPen) {
  //   const diferenca = Math.abs(valorAtualizadoPen - valorCalculadoPen);
  
  //   cy.log(`Diferença entre os valores: ${diferenca}`);
  
  //   expect(diferenca).to.be.lessThan(0.01, `O Valor Atualizado exibido não está correto! Diferença: ${diferenca}`);
  //   cy.log('✅ O Valor Atualizado está correto.');
  // }
}
export default MenuPage;