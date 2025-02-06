import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class operacionalRecom{
    acessarBordero() {
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').click();
        cy.get('#item-menu-1 > span').click();
        cy.get(':nth-child(9) > [data-label=" "] > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
    }

    criandoRecompra() {
        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > app-bordero > div > bordero-kanban > div.full-row.fl.mt20.mb20.ng-star-inserted > bordero-grid > div > w-table > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > span > span > fa-icon').click();
        cy.get('#bt-avancar > .ng-star-inserted').click();
        cy.get('.mega-menu > :nth-child(1) > #item-0').click();
        cy.get('.card-operacao').click();
        cy.get('#select-lancamentos > .mat-icon').click();
        cy.get('#mat-checkbox-9 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('#select-pendencias > .mat-icon').click();
        cy.get('#mat-checkbox-21 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('[formcontrolname="valorDe"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('2206');
        cy.get('[formcontrolname="valorAte"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('32333');
        cy.get('.example-chip-list > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('3317');
    }

    concluindoRecompra() {
        if ('.msg-erro-filtro > span') {
            throw new Error('O Valor Atualizado exibido não está correto!');
          } else {
            cy.log('O Valor Atualizado está correto.');
          }
        cy.get('.msg-erro-filtro > span')
        cy.get('.bt-flat-azul > .btn > .ng-star-inserted').click();
     }
}

export default operacionalRecom;