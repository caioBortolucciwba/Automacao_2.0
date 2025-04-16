import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class anexandoDoc{
    acessarStepAnexo(){
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1').click();
        cy.get('#btn-filtro').click();
        cy.fixture('bordero/numeroDm').then((data) => {
            console.log(data); 
            expect(data).to.have.property('codigoBordero');
            
            // Verifique se o seletor está correto e se é um campo de entrada
            cy.get('#mat-chip-list-0').type(data.codigoBordero); // Certifique-se de que este é um campo de entrada
        
            cy.get('#btn-avancar').click();
        });
        cy.get('[data-label=" "] > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
        cy.get('#bt-anexar').click({ force: true });
    }

    anexarDocumentos(){
        cy.get('.w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="FIDC - FINAXIS FIDC"] > .label-option').click();
        cy.get('.height-fix > .ng-invalid > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('TXT 15');
        // cy.get(':nth-child(3) > .ng-pristine > .w-select > .w-select-input').click();
        cy.get(':nth-child(3) > .ng-pristine > .w-select > .w-select-input').attachFile('cenarios.txt');
        cy.get('[ng-reflect-label="Duplicata Mercantil"] > .label-option').click();
        cy.get('#btn-upload-documento > .ng-star-inserted')
        .should('be.visible')
        .click(); 
        cy.get('input[type="file"]').attachFile('remessa.txt', 'REMESSA280824_NEW.pdf'); 
        cy.get('#btn-incluir-atualizar-documento > .ng-star-inserted').click();
        
    }

    documentosAnexados(){
        cy.get(':nth-child(2) > .btn > .ng-star-inserted').click();
    }


}

export default anexandoDoc;