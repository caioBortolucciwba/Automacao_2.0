
class PesquisaPjEmpresa {
    PesquisaPjEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjEmpresa(){
        cy.fixture('cpf/cnpj_empresa').then((data) => {
            cy.get('#input-search').type(data.cnpjempresa);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjEmpresa;
  