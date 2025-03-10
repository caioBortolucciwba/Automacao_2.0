class formulasRem{
    AcessandoDebentrures() {
        cy.get('#menu-lateral-COBRANCA').click();
        cy.get('.link-configuracoes > span').click();
        cy.get('#card-menu-4 > .card-titulo-texto').click();
    }

    criandoFormulasRm() {
        cy.get('#card-menu-0 > .card-icon').click();
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-8 > .mat-option-text').click();
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('.breadcrumbs > ul > :nth-child(1)').click();
        cy.get('#card-menu-6 > .card-titulo-texto').click();
        cy.get('#card-menu-10 > .card-icon').click();
        cy.get('#FORMULAS_REMUNERACAO').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get('#nome-formula > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('CDI Aut');
        cy.get('#remuneracao-cdi > .mat-slide-toggle-label').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-20 > .mat-option-text').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.get('#FORMULAS_REMUNERACAO').click();
        cy.get('#btn-novo').click();
        cy.get('#nome-formula > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Juros simples Aut');
        cy.get('#juros-simples > .mat-slide-toggle-label').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.get('#btn-novo').click();
        cy.get('#nome-formula > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Juros composto Aut');
        cy.get('#juros-compostos > .mat-slide-toggle-label').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }
    
    criandoEscritura() {
        cy.get('#ESCRITURACAO').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get('#mat-input-31').type('CDI aut');
        cy.get('#mat-input-32').type('1000000');
        cy.get('#mat-input-33').type('100000000000');
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
        cy.get('[aria-label="6 de março de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-18').type('2323');
        cy.get('#mat-input-19').type('151515');
        cy.get('#mat-input-20').type('Teste QA');
        cy.get('.fr.mr16 > w-button > #btn-label-sim > .ng-star-inserted').click();
        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > empresa-panel > div.full-row.fl.mt20.ng-star-inserted > w-panel-menu > section > section > section > db-escrituracao > mat-paginator > div > div > div.mat-paginator-page-size.ng-star-inserted > mat-form-field').click();
        cy.get('#mat-option-9 > .mat-option-text').click();
        cy.contains('CDI aut').click();
        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > empresa-panel > div.full-row.fl.mt20.ng-star-inserted > w-panel-menu > section > section > section > db-escrituracao > w-table > form > table > tbody > tr:nth-child(27) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(1) > svg').click();
    }
}

export default formulasRem;