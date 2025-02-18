
class PesquisaPjAssinante {
    PesquisaPjAssinante(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjAssinante(){
        cy.get('#input-search').type('72.584.609/0001-66');
        cy.get("#bt-search").click();  
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjAssinante;
  