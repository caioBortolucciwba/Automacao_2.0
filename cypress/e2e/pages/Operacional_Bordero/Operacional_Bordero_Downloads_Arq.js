class baixarArquivo{

    acessarStepAnexo() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1').click();
       
    }

    baixarAnexo() {
        // cy.get(':nth-child(1) > [data-label="Ações"] > [ng-reflect-ng-style="[object Object]"] > .actions > [ng-reflect-message="Excluir documento"]').click();
        // cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        // cy.get(':nth-child(1) > [data-label="Ações"] > [ng-reflect-ng-style="[object Object]"] > .actions > [ng-reflect-message="Excluir documento"]').click();
        // cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }

    acaoConcluida() {
        // cy.get(':nth-child(2) > .btn > .ng-star-inserted').click();
    }
}

export default baixarArquivo;