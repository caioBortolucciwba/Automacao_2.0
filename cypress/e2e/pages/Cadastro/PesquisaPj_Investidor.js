
class PesquisaPjInvestidor {
    PesquisaPjInvestidor(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjInvestidor(){
        cy.fixture('cpf/cnpj_investidor').then((data) => {
            cy.get('#input-search').type(data.cnpjinvestidor);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjInvestidor;
  