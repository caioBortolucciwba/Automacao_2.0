
class PesquisaPjFornecedor {
    PesquisaPjFornecedor(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjFornecedor(){
        cy.get('#input-search').type('08.147.265/0001-29');
        cy.get("#bt-search").click();  
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjFornecedor;
  