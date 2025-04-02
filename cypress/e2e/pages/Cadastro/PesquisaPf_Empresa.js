
class PesquisaPfEmpresa {
    PesquisaPfEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfEmpresa(){
        cy.fixture('cpf/cpf_empresa').then((data) => {
            cy.get('#input-search').type(data.cpfempresa);
            cy.get("#bt-search").click();
        }); 
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfEmpresa;
  