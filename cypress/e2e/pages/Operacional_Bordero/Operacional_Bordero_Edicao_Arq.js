class edicaoAnexo{

    acessarStepAnexo() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 ').click();
        cy.get(':nth-child(9) > [data-label=" "] > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
        cy.get('#bt-anexar > .iconSvg').click();
    }

    editarAnexo() {
        cy.get(':nth-child(1) > [data-label="Ações"] > [ng-reflect-ng-style="[object Object]"] > .actions > [ng-reflect-message="Editar documento"]').click();
        cy.get('.ui-g-12.ng-untouched > :nth-child(1)').click();
        cy.get('.w-select-list > .ng-star-inserted').click();
        cy.get(':nth-child(1) > [data-label="Ações"] > [ng-reflect-ng-style="[object Object]"] > .actions > [ng-reflect-message="Editar documento"]').click();
        cy.get('w-input.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('w-input.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('DM035');
        cy.get('#btn-incluir-atualizar-documento > .ng-star-inserted').click();
    }

    edicacoConcluida() {
        cy.get(':nth-child(2) > .btn > .ng-star-inserted').click();
    }
}

export default edicaoAnexo;