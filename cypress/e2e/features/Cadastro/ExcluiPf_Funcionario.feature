Feature: Operação exclui PF funcionario

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Exclui PF campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pf funcionario
    And exclui o pf funcionario
    Then tenho exclui pf funcionario concluido
