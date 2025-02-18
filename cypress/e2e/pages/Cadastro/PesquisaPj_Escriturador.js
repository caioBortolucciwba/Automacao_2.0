
class PesquisaPjEscriturador {
    PesquisaPjEscriturador(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjEscriturador(){
        cy.get('#input-search').type('09.949.077/0001-87');
        cy.get("#bt-search").click();  
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjEscriturador;
  