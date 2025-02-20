
class PainelCliente{
    painelClienteKarinaSacado(){
        cy.get('.link-configuracoes > .icon').click();
        cy.get('#card-menu-0 > .card-titulo-texto > .header').click();
        cy.get('#card-menu-9 > .card-icon').click();
        cy.get('#PERFIL_ACESSO_SACADO').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get("#mat-input-2").type('Teste Karina Sacado');
        cy.get('#btn-salvar > .ng-star-inserted').click();      
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
        cy.get('#input-search').type('888.999.777-04');
        cy.get("#bt-search").click();
        // cy.get('body').type('{esc}'); 
        cy.get('body').type('{esc}');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(1) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(2) > svg").click();
        cy.get('#item-menu-12').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get("#mat-input-33").click();
        cy.get("#mat-input-33").type('653.439.135-04');
        cy.get('#mat-input-34').click();
        cy.get('#mat-input-34').type('Teste Karina Sacado Painel')
        cy.get('#mat-input-35').click();
        cy.get('#mat-input-35').type('daniel.souza@wba.com');
        cy.get('#btn-add-empresa').click();
        cy.get('#select-empresa-sacado0 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#select-perdil-sacado0 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-80 > .mat-option-text').click();
        cy.get('.ml30 > .btn > .ng-star-inserted').click();





        //steps da página principal de cadastro do novo cliente em configurações.

    }

    PaginaPainelCLiente(){
        visit();
            cy.visit('https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=c105d7a2-f248-498f-8aba-645ea981b56b&response_mode=fragment&response_type=code&scope=openid&nonce=95cf3e7c-d497-4c14-8d64-a5e02c9eaf1d');
    
            fillUsername(username) 
                cy.get('#mat-input-0').type('CPF'); 
              
            
              fillPassword(password) 
                cy.get('#mat-input-1').type('CPF'); 
              
            
              submit() 
                cy.get('.btn > .ng-star-inserted > span').click(); 
    }
    

    CadastroConcluido(){ 

       cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}

  
  export default  PainelCliente;
