
class VisualizaPfOutros {
    VisualizaPfOutros(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPfOutros(){
        cy.fixture('cpf/cpf_outros').then((data) => {
            cy.get('#input-search').type(data.cpfoutros);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get('.actions > :nth-child(1)').click();
        });
    }   

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPfOutros;
  