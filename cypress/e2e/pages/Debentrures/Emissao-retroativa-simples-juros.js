class emissaoSimples{
    acessandoInvestimento() {
        cy.get('#menu-lateral-INVESTIMENTOS').click();
        cy.get('#item-menu-1 > span').click();
    }

    fazendoEmissao() {
        cy.get('#bt-emitir').click();
        cy.get(':nth-child(1) > :nth-child(1) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.contains('PROPRIA - Securitizadora Matheus').click();
        cy.get('#acFormField > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Alberto');
        cy.get('.mat-option-text').click();
        cy.get(':nth-child(2) > :nth-child(1) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.contains('Escritura Simples Juros').click();
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('.mat-option-text').click();
        cy.get('#btn-label-sim').click();
    }

    emissaLiberada() {
        cy.get('#mat-input-5').type('2');
        cy.get('#input-validade').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="dezembro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="31 de dezembro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(3) > w-button > #btn-label-sim').click();
        cy.get('.mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="dezembro 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="31 de dezembro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.contains('999 - Banco do Brasil S.A. - 001 AG 0921 C/C 34188-1').click();
        cy.get(':nth-child(3) > w-button > #btn-label-sim > .ng-star-inserted').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }
}

export default emissaoSimples;