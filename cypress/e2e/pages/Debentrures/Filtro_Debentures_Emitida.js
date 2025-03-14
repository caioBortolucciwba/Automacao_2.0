class filtro{
    acessarFiltro() {
        cy.get('#menu-lateral-INVESTIMENTOS').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#btn-filtro').click();
        cy.get('#select-empresa > .w-select > .w-select-input').click();
        cy.contains('PROPRIA - Securitizadora Matheus').click();
        cy.get('.inputs').click();
        cy.get('#mat-chip-list-0').type('Alb');
        cy.contains('2234 - 243.651.586-78 - Alberto de Lima Henrique').click();
        cy.get('.wb-row > :nth-child(2) > w-button > .btn').click();
        
        
    }

    resultadoFiltro(){
        cy.get('.submenu__fechado > .iconSvg').click();
        cy.get(':nth-child(2) > .semBefore > [ng-reflect-ng-style="[object Object]"] > .actions > .iconSvg').click();
        
    }
}

export default filtro;