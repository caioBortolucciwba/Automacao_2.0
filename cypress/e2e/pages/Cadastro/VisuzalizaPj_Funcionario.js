
class VisualizaPjFuncionario {
    VisualizaPjFuncionario(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPjFuncionario(){
        cy.get('#input-search').type('41.795.831/0001-84');
        cy.get("#bt-search").click(); 
        cy.get('body').type('{esc}');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(1)").click();
    }

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPjFuncionario;
  