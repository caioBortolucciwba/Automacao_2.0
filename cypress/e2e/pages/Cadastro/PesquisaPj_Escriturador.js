
class PesquisaPjEscriturador {
    PesquisaPjEscriturador(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjEscriturador(){
        cy.fixture('cpf/cnpj_edcriturador').then((data) => {
            cy.get('#input-search').type(data.cnpjescriturador);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjEscriturador;
  