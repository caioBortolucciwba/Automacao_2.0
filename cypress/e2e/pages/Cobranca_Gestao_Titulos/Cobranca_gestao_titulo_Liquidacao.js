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
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('[ng-reflect-label="12 - Grafeno - 274 AG 0001 C/C"] > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();

    cy.get('#mat-input-33').clear().type('50000');
    cy.get('#mat-input-34').clear().type('100000');
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJuros() {
    return this.obterValorMonetario('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-gestao-lancamento > div > app-gestao-cobranca > div > app-bloco-nova-visao > div > div.container.mt-5.pt-3.modal-nova-visao-content > div > div > conteudo-liq-individual > div > div > w-table > form > table > tbody > tr > td:nth-child(7)').then((valorPago) => {
      if (valorPago === null) throw new Error("Erro: 'Valor Pago' não encontrado.");
      
      return this.obterValorPorcentagem('#mat-input-33').then((multa) => {
        if (multa === null) throw new Error("Erro: 'Multa' não encontrada.");
  
        return this.obterValorPorcentagem('#input-juros-de-mora > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').then((juros) => {
          if (juros === null) throw new Error("Erro: 'Juros' não encontrado.");
  
          return this.obterValorNumerico('[data-label="Prazo"]').then((prazo) => {
            if (prazo === null) throw new Error("Erro: 'Prazo' não encontrado.");
  
            return this.obterValorMonetario('[data-label="Despesas"] > :nth-child(1)').then((despesas) => {
              if (despesas === null) despesas = 0;
  
              return this.obterValorMonetario('[data-label="Valor Atualizado"] > span').then((valorAtualizado) => {
                if (valorAtualizado === null) valorAtualizado = 0;
  
                const valorMulta = valorPago * (multa / 100);
                const valorJuros = valorPago * (juros / 100) * prazo;
                const valorCalculado = valorPago + valorMulta + valorJuros + despesas;
  
                cy.log('Resultado do cálculo:', {
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
      cy.log(`Texto capturado (${seletor}):`, text);
  
      // Remove qualquer caractere que não seja número ou vírgula/ponto
      let valorLimpo = text.replace(/[^0-9,.-]/g, '');
  
      // Se houver múltiplas vírgulas, remover todas, exceto a última
      if ((valorLimpo.match(/,/g) || []).length > 1) {
        valorLimpo = valorLimpo.replace(/,/g, '');
      }
  
      // Substituir a vírgula final por ponto para conversão correta
      valorLimpo = valorLimpo.replace(',', '.');
  
      cy.log(`Valor formatado (${seletor}):`, valorLimpo);
  
      return parseFloat(valorLimpo) || 0; // Retorna 0 se a conversão falhar
    });
  }
  

  obterValorPorcentagem(seletor) {
    return cy.get(seletor).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.')) / 100;
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
}

export default MenuPage;
