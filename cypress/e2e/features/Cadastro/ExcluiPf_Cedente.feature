Feature: Operação exclui PF cedente

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Exclui PF campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pf cedente
    And exclui o pf cedente
    Then tenho exclui pf cedente concluido
