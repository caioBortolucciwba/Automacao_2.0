
class PesquisaPjProspect {
    PesquisaPjProspect(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjProspect(){
        cy.fixture('cpf/cnpj_prospect').then((data) => {
            cy.get('#input-search').type(data.cnpjprospect);
            cy.get("#bt-search").click();  
        });
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjProspect;
  