class OperacionalArquivo {
    acessarBordero() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-bordero-operacao > .ng-star-inserted').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('1831');
        cy.get('#mat-option-17 > .mat-option-text').click();
        cy.get('#btn-avancar > .ng-star-inserted > span').click();
    }

    importarArquivo(nomeDoArquivo) {
        // Verifica se o elemento existe antes de interagir
        cy.get('#dragAndDropText', { timeout: 60000 }).should('exist');
        
        // Validação adicional após o upload
        cy.wait(2000); // Ajuste o tempo conforme necessário
    }

    operacaoConcluida() {
        cy.get('.mensagem-sucesso').should('be.visible');
    }

   
}

export default OperacionalArquivo;
