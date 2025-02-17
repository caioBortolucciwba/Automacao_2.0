
class PesquisaPfEscriturador {
    PesquisaPfEscriturador(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPfEscriturador(){
        cy.get('#input-search').type('231.566.161-76');
        cy.get("#bt-search").click();  
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPfEscriturador;
  