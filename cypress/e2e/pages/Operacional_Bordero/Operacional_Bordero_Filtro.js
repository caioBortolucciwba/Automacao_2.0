import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class filtroBordero{
    acessarBordero() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 ').click();    
    }

    filtrarBorderoSimples(){
        cy.get('#btn-filtro').should('be.visible').click();
        cy.get(':nth-child(1) > :nth-child(1) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-17 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-18 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-19 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-20 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-21 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-22 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-23 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-17 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-24 > .mat-option-pseudo-checkbox').click();     
        cy.get('#mat-option-25 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-26 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-27 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-28 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-29 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-24 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get('#data-criacao-de').click();
        cy.get('.mat-calendar-previous-button').click();
        cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get('#data-criacao-ate').click();
        cy.get('[aria-label="1 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#btn-avancar > .ng-star-inserted > span').click();
    }

    filtroCompleto(){
        cy.get('#btn-filtro').should('be.visible').click();
        cy.get(':nth-child(1) > :nth-child(1) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-38 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-39 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-40 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-41 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-42 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-43 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-44 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get(':nth-child(2) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-45 > .mat-option-pseudo-checkbox').click();     
        cy.get('#mat-option-46 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-47 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-48 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-49 > .mat-option-pseudo-checkbox').click();
        cy.get('#mat-option-50 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get('.wb-lg-7 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Bancor');
        cy.get('#mat-option-64 > .mat-option-text').click();
        cy.get(':nth-child(1) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click();
        cy.get('[aria-label="1 de dezembro de 2024"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(2) > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix').click();
        cy.get('[aria-label="1 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get('#btn-avancar > .ng-star-inserted > span').click();
    }

    filtroConcluidos(){
        cy.log('Filtros simples e completos operando normal');
    }
}

export default filtroBordero;