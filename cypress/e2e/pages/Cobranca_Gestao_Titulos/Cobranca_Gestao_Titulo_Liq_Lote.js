class LiquidacaoLote {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
    cy.get('#item-menu-1').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();
  }

  validarLote() {
    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > :nth-child(5) > .label-option').click();
    cy.get('.menu-right-filtro').click();
    cy.get('#input-vencimento').click();
    cy.get('.mat-calendar-period-button').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-period-button').click();
    cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="dezembro 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('[aria-label="31 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();

    cy.get(':nth-child(3) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado').click();
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();
    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('#select-tipo-pessoa > .w-select > .overlay > .w-select-list > :nth-child(3) > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .overlay > .w-select-list > :nth-child(3) > .label-option').click();
    cy.get('#mat-input-35').clear().type('50000');
    cy.get('#mat-input-36').clear().type('100000');
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

    cy.get('[data-row]', { timeout: 100000 }).each(($row) => {
        const extrairValor = (dataLabel) => {
            return cy.wrap($row).find(`[data-label="${dataLabel}"]`).invoke('text').then(text => {
                return parseFloat(text.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
            });
        };

        return Promise.all([
            extrairValor("Valor Pago"),
            extrairValor("Multa"),
            extrairValor("Juros de mora"),
            extrairValor("Prazo"),
            extrairValor("Despesas"),
            extrairValor("Valor atualizado")
        ]).then(([valorPago, multa, juros, prazo, despesas, valorAtualizado]) => {
            let multaCalculada = multa;
            let jurosCalculado = prazo > 30 ? juros : juros * (prazo / 30);
            let valorCalculado = valorPago + multaCalculada + jurosCalculado + despesas;

            valores.valorPagoTotal += valorPago;
            valores.multaTotal += multaCalculada;
            valores.jurosTotal += jurosCalculado;
            valores.despesasTotal += despesas;
            valores.valorAtualizadoTotal += valorAtualizado;
        });
    }).then(() => {
        const valorCalculadoTotal = valores.valorPagoTotal + valores.multaTotal + valores.jurosTotal + valores.despesasTotal;
        const valorAtualizadoArredondado = Number(valores.valorAtualizadoTotal.toFixed(2));
        const valorCalculadoArredondado = Number(valorCalculadoTotal.toFixed(2));

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
