Feature: Contas a pagar/receber - Contas a pagar - Pagos - Estorno

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Contas a pagar/receber - Contas a pagar - Pagos - Estorno
    Given recebe a solicitacao para efetuar um estorno de um titulo
    When filtra o titulo paga que precisa estornar 
    Then deve ter o estorno concluido com real motivo
    