
class PesquisaPjAssinante {
    PesquisaPjAssinante(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjAssinante(){
        cy.fixture('cpf/cnpj_assinante').then((data) => {
            cy.get('#input-search').type(data.cnpjassinante);
            cy.get("#bt-search").click(); 
        }); 
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjAssinante;
  