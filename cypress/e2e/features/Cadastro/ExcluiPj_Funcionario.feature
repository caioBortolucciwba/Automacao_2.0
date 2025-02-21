Feature: Operação exclui PJ funcionario

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Exclui PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj funcionario
    And exclui o pj funcionario
    Then tenho exclui pj funcionario concluido
