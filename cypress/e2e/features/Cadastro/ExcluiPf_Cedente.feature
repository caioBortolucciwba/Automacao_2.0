Feature: Teste: Fazer operação exclui PF CEDENTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PF CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pf cedente
    And exclui o pf cedente
    Then tenho exclui pf cedente concluido
