
class ExcluiPfEmpresa{
    ExcluiPfEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherExcluiPfEmpresa(){
        cy.get('#input-search').type('Rohan Amaral');
        cy.get("#bt-search").click(); 
        cy.get('body').type('{esc}');
        cy.get(':nth-child(4) > .semBefore > [ng-reflect-ng-style="[object Object]"] > .actions > :nth-child(3)').click();
        //cy.get('.actions > :nth-child(3) > .svg-inline--fa > path').click();
        //cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(3)").click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
    }

    ExcluiConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Exclui concluído com sucesso.');
    }
    
  }
  
  export default ExcluiPfEmpresa;
  