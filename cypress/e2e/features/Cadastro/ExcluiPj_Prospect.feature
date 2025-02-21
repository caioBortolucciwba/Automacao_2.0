Feature: Operação exclui PJ prospect

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Exclui PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj prospect
    And exclui o pj prospect
    Then tenho exclui pj prospect concluido
