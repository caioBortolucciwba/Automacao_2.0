import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class anexandoXLS{
    acessarStepAnexo(){
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 ').click();
        cy.get(':nth-child(9) > [data-label=" "] > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
        cy.get('#bt-anexar > .iconSvg').click();
    }

    anexarXLS(){
        cy.get('.w-select-input').click();
        cy.get('.w-select-list > .ng-star-inserted').click();
        cy.get('.height-fix > .ng-invalid > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('TXT 15');
        cy.get(':nth-child(3) > .ng-pristine > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Duplicata Mercantil"] > .label-option').click();
        cy.get('#btn-upload-documento > .ng-star-inserted')
        .should('be.visible')
        .click(); 
        cy.get('input[type="file"]').attachFile('arquive15k.xlsx'); 
        cy.get('#btn-incluir-atualizar-documento > .ng-star-inserted').click();
    }

    documentosXLS(){
        cy.get(':nth-child(2) > .btn > .ng-star-inserted').click();
    }


}

export default anexandoXLS;