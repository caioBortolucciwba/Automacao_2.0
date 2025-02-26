class LiquidacaoLote {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();
  }

  validarLote() {
    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="PROPRIA - Karina FAC"] > .check-multiple').click();
    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-previous-button').click().click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="31 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();

    cy.get(':nth-child(2) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get(':nth-child(2) > .block > .d-block > w-table.ng-star-inserted > form.ng-untouched > .wba-table > thead > tr > :nth-child(1)').click().click();
    cy.get(':nth-child(7) > #item-6').click();
  
    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="02 - Itaú Unibanco S.A. - 341 "] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();
    cy.get('#mat-input-36').type('50000');
    cy.get('#mat-input-37').clear().type('100000');
    cy.get('#check-multa').click();
    cy.get('#check-juros-de-mora').click();
    cy.get('#check-tarifa-liq').click();
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJurosLote() {
    cy.wait(10000);

    let valores = {
      valorPagoTotal: 0,
      multaTotal: 0,
      jurosTotal: 0,
      despesasTotal: 0,
      valorAtualizadoTotal: 0
    };

    const capturarValor = (seletor, campo) => {
      cy.get(seletor).then(($elements) => {
        let soma = 0;
        $elements.each((index, el) => {
          const valor = parseFloat(el.innerText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
          soma += valor;
        });
        valores[campo] = soma;
      });
    };

    capturarValor('[data-label="Valor"]', 'valorPagoTotal');
    capturarValor('[data-label="Multa"]', 'multaTotal');
    capturarValor('[data-label="Juros de mora"]', 'jurosTotal');
    capturarValor('[data-label="Despesas adicionais"]', 'despesasTotal');
    capturarValor('[data-label="Valor atualizado"]', 'valorAtualizadoTotal');

    cy.then(() => {
      const valorCalculado = valores.valorPagoTotal + valores.multaTotal + valores.jurosTotal + valores.despesasTotal;
      const valorAtualizadoArredondado = Number(valores.valorAtualizadoTotal.toFixed(2));
      const valorCalculadoArredondado = Number(valorCalculado.toFixed(2));
      
      cy.log(`✅ Valor Pago Total: ${valores.valorPagoTotal}`);
      cy.log(`✅ Multa Total: ${valores.multaTotal}`);
      cy.log(`✅ Juros Total: ${valores.jurosTotal}`);
      cy.log(`✅ Despesas Total: ${valores.despesasTotal}`);
      cy.log(`✅ Valor Atualizado no Sistema: ${valorAtualizadoArredondado}`);
      cy.log(`✅ Valor Calculado: ${valorCalculadoArredondado}`);
      cy.log(`🔍 Diferença entre valores: ${Math.abs(valorAtualizadoArredondado - valorCalculadoArredondado)}`);
  
      expect(Math.abs(valorAtualizadoArredondado - valorCalculadoArredondado)).to.be.at.most(0.02,
        `❌ O Valor Atualizado exibido não está correto!: Esperado ${valorCalculadoArredondado}, encontrado ${valorAtualizadoArredondado}`);
      
      cy.log('✅ O Valor Atualizado está correto.');
  });
  
  }
}

export default LiquidacaoLote;
