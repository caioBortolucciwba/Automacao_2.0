
class PesquisaPfOutros {
    PesquisaPfOutros(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfOutros(){
        cy.fixture('cpf/cpf_outros').then((data) => {
            cy.get('#input-search').type(data.cpfoutros);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfOutros;
  