
class PesquisaPjFornecedor {
    PesquisaPjFornecedor(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjFornecedor(){
        cy.fixture('cpf/cnpj_fornecedor').then((data) => {
            cy.get('#input-search').type(data.cnpjfornecedor);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjFornecedor;
  