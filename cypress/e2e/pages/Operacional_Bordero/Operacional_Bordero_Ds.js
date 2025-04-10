import { gerarCPF, gerarCNPJ } from '../../../support/utils';

const cnpj = gerarCNPJ();
class OperacionalBorderoDS {
    acessarBordero() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').should('be.visible').click();
        cy.get('#item-menu-1').should('be.visible').click();
        cy.get('#bt-bordero-operacao').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('47');
        cy.get('#mat-option-17 > .mat-option-text').click();
        cy.get('#btn-avancar').click();
    }
    digitandotituloDsManualmente() {
        cy.get('.mega-menu > :nth-child(2)').click();
        cy.get('#select-tipo-recebivel > .w-select > .w-select-input').click();
        cy.contains('Duplicata de Serviço').click();
        cy.get('#mat-input-13').type('DS025');
        cy.get('#select-sub-tipo-recebivel > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="01 - ds simples2"] > .label-option').click();
        cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('4526000');
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('.mat-calendar-period-button').click();
        cy.get('.mat-calendar-body-active').click();
        cy.get('[aria-label="junho 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('[aria-label="30 de junho de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cnpj);
        cy.get('#mat-input-23').type('Cedente Arca LTDA');


        cy.get('#btn-salvar').click();
        cy.get('#btn-incluir-alterar').click();
        cy.get('#btn-finalizar')
            .should('be.visible')
            .and('not.be.disabled')
            .click();
        cy.contains('Sacado salvo com sucesso!', { timeout: 30000 }).should('be.visible');
    }
    avancoStepObrigatorios() {

    }
    concluindoOperacaoDS() {

    }
}

export default OperacionalBorderoDS;