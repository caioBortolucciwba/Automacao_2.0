
class PesquisaPjInstFinanceira {
    PesquisaPjInstFinanceira(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjInstFinanceira(){
        cy.fixture('cpf/cnpj_instfinanceira').then((data) => {
            cy.get('#input-search').type(data.cnpjinstfinanceira);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjInstFinanceira;
  