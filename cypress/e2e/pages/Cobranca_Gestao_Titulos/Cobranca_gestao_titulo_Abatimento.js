class Abatimento {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposAbatimento() {
    // Abertura e seleção de campos no menu Cobrança
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    // Seleção de empresa/carteira
    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="FIDC - RENAN FIDC SAA"] > .check-multiple').click();

    // Aplicação de filtros de data
    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();

    // Confirmação dos filtros aplicados
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();

    // Seleção de título e preenchimento de campos
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
    cy.get(':nth-child(4) > #item-3').click();
    cy.get('#mat-input-29').clear().type('50000');
    cy.get('.w-row > :nth-child(5) > w-button > .btn > .ng-star-inserted').click();
  }

  tituloAbatimento() {
    cy.wait(10000);
    
    cy.get('[data-label="Valor"] > span').invoke('text').then((valorTotalText) => {
     const valorTotal = parseFloat(valorTotalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
   
     cy.get('[data-label="Abatimento"] > span').invoke('text').then((abatimentoText) => {
       const abatimento = parseFloat(abatimentoText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
   
       cy.get('[data-label="Tarifa"] > span').invoke('text').then((tarifaText) => {
         const tarifa = parseFloat(tarifaText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
   
         cy.get('[data-label="Custos"] > :nth-child(1)').invoke('text').then((custosText) => {
           const custos = parseFloat(custosText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
   
           cy.get('[data-label="Valor atual"] > span').invoke('text').then((valorAtualText) => {
             const valorAtual = parseFloat(valorAtualText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
   
               let valorCalculado = valorTotal - abatimento;
     
                   //Arredondamento correto
                   valorCalculado = Math.round(valorCalculado);
                   const valorAtualizadoArredondado = Math.round(valorAtual);
     
                   //Logs para depuração
                 cy.log(`Valor Pago: ${valorTotal}`);
                 cy.log(`Multa: ${abatimento}`);
                 cy.log(`Juros: ${custos}`);
                 cy.log(`Prazo: ${valorAtual}`);
                 cy.log(`Valor Calculado: ${valorCalculado}`);
                 cy.log(`Diferença: ${Math.abs(valorAtualizadoArredondado - valorCalculado)}`);
   
                 //Validação corrigida
                 expect(Math.abs(valorAtualizadoArredondado - valorCalculado)).to.be.lessThan(0.02,
                   `❌ O Valor Atualizado exibido não está correto!: Esperado ${valorCalculado}, encontrado ${valorAtual}`);
                 cy.log('✅ O Valor Atualizado está correto.');
               });
             });
           });
         });
       });
     };
   }
   
export default Abatimento;
