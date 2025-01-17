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
    cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('#input-ate').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('[aria-label="23 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    cy.get(':nth-child(1) > box-informacoes > .card-box-informacoes > .btn__mostrarMais > .submenu__fechado > .iconSvg').click();
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();
    cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
    cy.get('#select-tipo-pessoa > .w-select > .overlay > .w-select-list > :nth-child(4) > .label-option').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('[ng-reflect-label="Dinheiro"] > .label-option').click();
    cy.get('#mat-input-33').clear().type('50000');
    cy.get('#mat-input-34').clear().type('100000');
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJurosEMulta(valorBase, juros, multa) {
    const valorBaseFloat = parseFloat(valorBase);
  
    // Valida se o valor base é numérico
    if (isNaN(valorBaseFloat)) {
      return {
        valorComJuros: undefined,
        valorComMulta: undefined,
        valorAtualizado: undefined,
      };
    }
  
    // Calcula valores com juros e multa
    const valorComJuros = valorBaseFloat * (1 + juros / 100);
    const valorComMulta = valorBaseFloat * (1 + multa / 100);
    const valorAtualizado = valorBaseFloat + (valorComJuros - valorBaseFloat) + (valorComMulta - valorBaseFloat);
  
    return {
      valorComJuros: valorComJuros.toFixed(2),
      valorComMulta: valorComMulta.toFixed(2),
      valorAtualizado: valorAtualizado.toFixed(2),
    };
  }
  
  calcularJuros() {
    cy.get('#mat-input-31') // Captura o valor base da interface
      .invoke('val') // Obtém o valor do campo
      .then((valorBase) => {
        // Limpa e converte o valor para formato numérico
        const valorLimpo = valorBase.replace(/[^\d,-]/g, '').replace(',', '.');
  
        if (!valorLimpo) {
          throw new Error('Valor base não encontrado ou está vazio.');
        }
  
        console.log("Valor base capturado:", valorLimpo);
  
        // Defina os valores de juros e multa (dinamicamente, se necessário)
        const juros = 5.0000; // Exemplo: 5%
        const multa = 10.0000; // Exemplo: 10%
  
        // Chama a função de cálculo
        const valoresCalculados = this.calcularJurosEMulta(valorLimpo, juros, multa);
  
        if (
          !valoresCalculados ||
          !valoresCalculados.valorComJuros ||
          !valoresCalculados.valorComMulta ||
          !valoresCalculados.valorAtualizado
        ) {
          throw new Error('Valores calculados estão incompletos ou indefinidos.');
        }
  
        console.log("Valores calculados com sucesso:", valoresCalculados);
  
        const { valorComJuros, valorComMulta, valorAtualizado } = valoresCalculados;
  
        // Valida os valores na interface
        cy.get('[data-label="Juros de mora"] span')
          .should('not.contain', 'Não aplicado')
          .and('contain', valorComJuros); // Valida o valor com juros
  
        cy.get('[data-label="Multa"] > span')
          .should('not.contain', 'Não aplicado')
          .and('contain', valorComMulta); // Valida o valor com multa
  
        cy.get('[data-label="Valor Atualizado"]')
          .should('not.contain', 'Não aplicado') // Certifica-se que "Não aplicado" não está presente
          .and('contain', valorAtualizado); // Valida o valor atualizado calculado
      });
  }
  
}

export default MenuPage;
