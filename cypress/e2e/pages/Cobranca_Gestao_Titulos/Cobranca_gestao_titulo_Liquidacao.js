class MenuPage {
  validateCobrançaMenu() {
    cy.get('#menu-lateral-COBRANCA > .texto-menu').click();
  }

  validarCamposCobranca() {
    cy.get('#item-menu-1 > span').click();
    cy.get('#btn-card-1 > .card-titulo-texto').click();
    cy.get('#bt-filtrar-titulos').click();

    cy.get('#select-empresa-carteira > .w-select > .w-select-input > .mat-icon').click();
    cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > :nth-child(5) > .label-option').click();

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
    cy.get('#mat-chip-list-1').click().type("06.911.774/0001-50");
    cy.get('.mat-option-text').click();


    cy.get('.wb-row > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    cy.get('#mat-tab-content-1-0 > div > conteudo-titulos-abertos > div.pb100.ng-star-inserted > div:nth-child(1) > box-informacoes > section > div.btn__mostrarMais.ng-star-inserted > button').click();
    cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(7) > #item-6').click();

    cy.get('#select-tipo-pessoa > .w-select > .w-select-input > .mat-icon').click();
    cy.get('#select-tipo-pessoa > div > div.overlay > div > wba-option:nth-child(3) > span').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .w-select-input').click();
    cy.get('#select-tipo-forma-pagamento > .w-select > .overlay > .w-select-list > :nth-child(3) > .label-option').click();

    cy.get('#mat-input-34').clear().type('50000');
    cy.get('#mat-input-35').clear().type('100000');
    cy.get('#check-multa').click();
    cy.get('#check-juros-de-mora').click();
    cy.get('#check-tarifa-liq').click();
    cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
  }

  calcularJuros() {

    //FORÇANDO ENDPOINT GERAR UM JUROS/MULTA/TARIFA INVALIDADA.
    ///*
    cy.intercept('POST', 'https://dnew-api.wba.com.br:30082/api/v1/private/calculos/encargos/liquidacao', (req) => {
      req.reply((res) => {
        console.log('Resposta da API: body', res.body);
        
         const valorJurosAntigoRetornado = res.body.lancamentos[0].juros; //SALVANDO NA VARIÁVEL O JUROS CORRETO RETORNADO PELA ENDPOINT LIQUIDAÇÃO
         console.log('Resposta da API- juros Antigo:', valorJurosAntigoRetornado); 

        res.body.lancamentos[0].juros = 200; //FORÇANDO O ENDPOINT LIQUIDAÇÃO DEVOLVER UM JUROS INVALIDO.
        const valorJurosAtualRetornado =  res.body.lancamentos[0].juros; //SALVANDO O JUROS ERRADO FORÇADO NO ENDPOINT.
        console.log('Resposta da API- juros Atual:', valorJurosAtualRetornado); 
        
        console.log('Resposta da API- valor atualizado:', res.body.lancamentos[0].valorAtualizado);
        
        const totalmulta = res.body.lancamentos[0].multa
        console.log('Resposta da API - multa:', totalmulta);
        
        const totaltarifa = res.body.lancamentos[0].tarifaLiquidacao
        console.log('Resposta da API - tarifa:', totaltarifa);
        
        const valortitulo = res.body.lancamentos[0].valorAtualizado - valorJurosAntigoRetornado - totalmulta - totaltarifa;
        console.log('Resposta da API - titulo:', valortitulo);
        
        res.body.lancamentos[0].valorAtualizado =  res.body.lancamentos[0].valorAtualizado - valorJurosAntigoRetornado + valorJurosAtualRetornado;
        console.log('Resposta da API - atualizadoAtual:', res.body.lancamentos[0].valorAtualizado);  

      });

    }).as('calculoJuros');

      cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
      cy.wait(10000);
      cy.get('.w-col-liq-linha-2 > w-button > .btn').click();
      cy.wait(10000);

    // FIM DO GERADOR DE MULTA/JUROS/DESPESA INVALIDA.*/

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

                // VALIDA SE O JUROS RETORNADO PELO ENDPOINT LIQUIDAÇÃO GEROU O JUROS CORRETO

                const calculoCorretoJuros = valorPago *((10/100+1)**(prazo/30)-1);
                const calculoCorretoJurosFormatado = calculoCorretoJuros.toFixed(2);
                const ResultadoCalculoJurosCorreto = parseFloat(calculoCorretoJurosFormatado);

                console.log("CALCULO - SISTEMA: ", juros)
                console.log("CALCULO CORRETO - MEU CALCULO: ", ResultadoCalculoJurosCorreto)

                if(juros == ResultadoCalculoJurosCorreto ){

                  assert.isTrue(true, 'Cálculo de juros retornado pelo backend está correto');  
                    } else {
                        assert.isTrue(false, 'Cálculo de juros retornado pelo backend está incorreto');
                    };
                
                  
                //FIM DA VALIDAÇÃO DO JUROS RETORNO PELO ENDPOINT.

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
