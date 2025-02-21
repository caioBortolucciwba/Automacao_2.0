Feature: Operação exclui PJ outros

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Exclui PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj outros
    And exclui o pj outros
    Then tenho exclui pj outros concluido
