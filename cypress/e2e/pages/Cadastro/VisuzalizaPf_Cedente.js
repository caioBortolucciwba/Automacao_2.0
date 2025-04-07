
class VisualizaPfCedente {
    VisualizaPfCedente(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPfCedente(){
        cy.fixture('cpf/cpf_cedente').then((data) => {
            cy.get('#input-search').type(data.cpfcedente);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(1) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(3) > svg').click();
        });
        }   

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPfCedente;
  