
class VisualizaPjProspect {
    VisualizaPjProspect(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPjProspect(){
        cy.get('#input-search').type('10.566.465/0001-68');
        cy.get("#bt-search").click(); 
        cy.get('body').type('{esc}');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(1) > svg").click();
        //cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(1) > svg > path").click();
       
    }

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPjProspect;
  