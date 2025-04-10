class formulasRem {
    AcessandoDebentrures() {
        cy.get('#menu-lateral-COBRANCA').click();
        cy.get('.link-configuracoes > span').click();
        cy.get('#card-menu-4 > .card-titulo-texto').click();
    }

    criandoFormulasRm() {
        cy.contains('Geral').click();
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-8 > .mat-option-text').click();
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('.breadcrumbs > ul > :nth-child(1)').click();
        cy.get('#card-menu-6 > .card-titulo-texto').click();
        cy.get('#card-menu-10 > .card-icon').click();
        cy.get('#FORMULAS_REMUNERACAO').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get('#nome-formula > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('CDI Autamação');
        cy.get('#remuneracao-cdi > .mat-slide-toggle-label').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.contains('252 dias').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }

    criandoEscritura() {
        cy.get('#ESCRITURACAO').click();
        cy.get('.btn > .ng-star-inserted').click();
        cy.get('#input-nome-escritutacao').type('Escritura Simples CDI Aut');
        cy.get('#mat-input-30').type('1000000');
        cy.get('#mat-input-31').type('100000000000');
        cy.get(':nth-child(1) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="julho 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="8 de julho de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('#input-data-vencimento-escritura').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="dezembro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="31 de dezembro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#input-data-limite').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="dezembro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="31 de dezembro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#input-data-assembleia').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="julho 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="6 de julho de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('#input-data-registro-publico').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="março 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="6 de março de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-33').type('2323');
        cy.get('#mat-input-34').type('151515');
        cy.get('#mat-input-35').type('Teste QA');
        cy.get('.fr.mr16 > w-button > #btn-label-sim > .ng-star-inserted').click();
        cy.get('#mat-select-5').click();
        cy.contains('50').click();
        cy.contains('Escritura Simples CDI').parent().siblings('[data-label="Ações"]').find('.iconSvg.btn-click-mega-menu-js').first().click();
    }

    finalizandoEscritura() {
        cy.get('#03').click();
        cy.get('#mat-input-56').type('Documento teste');
        cy.get('#mat-input-57').type('Arquivo teste');
        cy.get('.input > w-button.ng-star-inserted > .btn > .ng-star-inserted').should('be.visible').click();
        cy.get('input[type="file"]').attachFile('cenarios.txt');
        cy.get('#btn-salvar-arquivo').click();
        //     cy.wait(3000);
        //   // Validação: Se aparecer a mensagem de erro, o teste falha
        //   cy.get('body').then(($body) => {
        //     if ($body.text().includes('Você não possui arquivos inseridos')) {
        //         throw new Error('Teste falhou: Nenhum arquivo foi anexado.');
        //     } else {
        //         cy.log('Arquivo anexado com sucesso!');
        //     }
        // });
        cy.get(':nth-child(3) > w-button > #btn-label-sim > .ng-star-inserted').click();
        cy.get('#mat-input-46').type('CDI 100% Simples');
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.contains('CDI Aut').click();
        cy.get('#input-porcentagem-cdi').clear().type('10000');

        cy.get('#btn-salvar-serie > .ng-star-inserted').click();
        cy.get(':nth-child(3) > w-button > #btn-label-sim > .ng-star-inserted').click();
    }
}

export default formulasRem;