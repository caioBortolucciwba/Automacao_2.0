
class PesquisaPfSacado {
    PesquisaPfSacado(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfSacado(){
        cy.fixture('cpf/cpf_sacado').then((data) => {
            cy.get('#input-search').type(data.cpfsacado);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfSacado;
  