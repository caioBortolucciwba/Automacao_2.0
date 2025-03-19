
class PainelCliente {
    painelClienteExportarKarinaCedente() {
      cy.wait(300);
      cy.get('#item-menu-lancamentos > span').click();
      
     
    }
    painelClienteExportarBoletoKarinaCedente(){
      cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
      cy.get(':nth-child(5) > #item-4').click()
      cy.wait(300);
      cy.get('#mat-input-10').type('daniel.souza@wba.com.br');
      cy.get('#btn-label-sim').click();
      cy.wait(300);
      cy.contains('E-mail enviado com sucesso!');

    }

    PainelCLienteConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}


export default PainelCliente;