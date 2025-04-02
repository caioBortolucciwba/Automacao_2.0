
class PesquisaPjFuncionario {
    PesquisaPjFuncionario(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjFuncionario(){
        cy.fixture('cpf/cnpj_funcionario').then((data) => {
            cy.get('#input-search').type(data.cnpjfuncionario);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjFuncionario;
  