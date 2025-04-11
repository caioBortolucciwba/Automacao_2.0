
class PesquisaPfFornecedor {
    PesquisaPfFornecedor(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfFornecedor(){
        cy.fixture('cpf/cpf_fornecedor').then((data) => {
            cy.get('#input-search').type(data.cpffornecedor);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfFornecedor;
  