import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class PesquisaPjSacado {
    PesquisaPjSacado(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
        
    
    }

    preencherPesquisaPjSacado(){
        cy.fixture('cpf/cnpj_sacado').then((data) => {
            cy.get('#input-search').type(data.cnpjsacado); 
            cy.get("#bt-search").click();
        });
        
       
        
    }

    pesquisaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Pesquisa concluído com sucesso.');
    }
    
  }
  
  export default PesquisaPjSacado;
  