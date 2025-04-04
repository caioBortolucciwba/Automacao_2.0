
class PesquisaPfAssinante {
    PesquisaPfAssinante(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfAssinante(){
        cy.fixture('cpf/cpf_assinante').then((data) => {
            cy.get('#input-search').type(data.cpfassinante);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfAssinante;
  