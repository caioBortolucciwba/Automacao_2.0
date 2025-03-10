class estornarContas{

    filtandoContas() {
        cy.get('#menu-lateral-FINANCEIRO').click();
        cy.get('#item-menu-2 > span').click();
        cy.get('#tabs-pagos').click();
        cy.get('#bt-filtrar-lancamentos > .ng-star-inserted').click();
        cy.get('.contas-a-apagar-filtro > .content-form > :nth-child(6) > :nth-child(1)').click();
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click();
        cy.get('[aria-label="2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="dezembro de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="31 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(7) > :nth-child(1) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('.contas-a-apagar-filtro > .content-form > .rodape-buttons > :nth-child(2) > w-button > .btn > .ng-star-inserted').click();
    }
    estornandoTitulo() {
        cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').should('be.visible')
        .click({ force: true })
        .then(($el) => {
            if ($el.length === 0) {
                throw new Error("Seletor não funciona");
            }
        });
        cy.get('.mega-menu > :nth-child(1) > #item-0').click();
        //Botão motivo 
        cy.get('.w-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();

        cy.get('#mat-input-30').type('Estorno teste');
        cy.get('.w-col-2 > w-button > .btn > .ng-star-inserted').click();
    }
    estornoSucesso() {

    }
}

export default estornarContas;