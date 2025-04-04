Feature: Teste: Fazer operação exclui PF ESCRITURADOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PF ESCRITURADOR
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pf escriturador
    And exclui o pf escriturador
    Then tenho exclui pf escriturador concluido
