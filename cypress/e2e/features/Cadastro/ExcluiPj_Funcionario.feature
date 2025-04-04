Feature: Teste: Fazer operação exclui PJ FUNCIONÁRIO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PJ FUNCIONÁRIO
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj funcionario
    And exclui o pj funcionario
    Then tenho exclui pj funcionario concluido
