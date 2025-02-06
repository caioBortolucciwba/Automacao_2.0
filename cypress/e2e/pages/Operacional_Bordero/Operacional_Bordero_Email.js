class enviandoEmail{
    acessarTopico() {
            cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
            cy.get('#item-menu-1 > span').click();
            cy.get(':nth-child(3) > [data-label=" "] > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
            cy.get('#bt-envio-email > .iconSvg').click();
    }

    preencherEmail() {
        cy.get(':nth-child(1) > .w-select > .mat-form-field-wrapper').click();
        cy.get('#mat-option-53 > .mat-option-text').click();
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-68').click();
        cy.get('.row > :nth-child(3)').click();
        cy.get('.mat-option-text').click();
        cy.get('.mt15 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('#mat-option-59').click();
        cy.get('.row > :nth-child(5)').type('teste@wba.com.br');
        cy.get('.mt10.w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('#mat-option-74 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get('#mat-input-9').type('Testando envio de e-mail')
    }

    emailEnviado() {
         cy.get('#btn-label-sim > .ng-star-inserted > span').click();

         cy.get('.mensagem-sucesso', { timeout: 10000 })
             .should('be.visible')
             .and('contain', 'E-mail enviado com sucesso');
    }
}

export default enviandoEmail;