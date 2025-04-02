
class PesquisaPjCedente {
    PesquisaPjCedente(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherPesquisaPjCedente(){
        cy.fixture('cpf/cnpj_cedente').then((data) => {
            cy.get('#input-search').type(data.cnpjcedente);
            cy.get("#bt-search").click(); 
        }); 
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjCedente;
  