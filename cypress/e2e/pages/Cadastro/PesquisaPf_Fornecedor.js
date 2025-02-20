
class PesquisaPfFornecedor {
    PesquisaPfFornecedor(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfFornecedor(){
        cy.get('#input-search').type('955.358.937-57');
        cy.get("#bt-search").click();  
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfFornecedor;
  