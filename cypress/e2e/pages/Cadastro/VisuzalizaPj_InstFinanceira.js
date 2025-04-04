
class VisualizaPjInstFinanceira {
    VisualizaPjInstFinanceira(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPjInstFinanceira(){
        cy.fixture('cpf/cnpj_instfinanceira').then((data) => {
            cy.get('#input-search').type(data.cnpjinstfinanceira);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get('.actions > :nth-child(1)').click();
        });
    }

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPjInstFinanceira;
  