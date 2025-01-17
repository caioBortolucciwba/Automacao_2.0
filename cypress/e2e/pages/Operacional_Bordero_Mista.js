import { gerarCPF, gerarCNPJ } from '../../support/utils';

class OperacionalBorderoMista {
    acessarBordero() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-bordero-operacao > .ng-star-inserted').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('67');
        cy.get('#mat-option-17 > .mat-option-text').click();
        cy.get('#btn-avancar > .ng-star-inserted > span').click();
    }

    criandoMista() {
        const cnpj = gerarCNPJ();
        const cpf = gerarCPF();
        cy.get(':nth-child(2) > #item-0').click();
        cy.get('#select-tipo-recebivel > .w-select > .w-select-input').click();
        cy.get('#dragAndDropText').attachFile('cenarios.txt');
        cy.get('#select-tipo-recebivel > .w-select > .overlay > .w-select-list > [ng-reflect-label="Duplicata Mercantil"] > .label-option').click();
        cy.get('#input-n-documento > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('DM1503');
        cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('4525000');
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click();
        cy.get('[aria-label="31 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(8) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cnpj);
        cy.get('form.ng-untouched > .row > :nth-child(2)').type('Cedente Teste');
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('#btn-incluir-alterar > .ng-star-inserted').click();
        cy.get('[data-label="Valor (R$)"] > span').type('Teste');
    }

    concluindoMista() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
     }

}
    
export default OperacionalBorderoMista;