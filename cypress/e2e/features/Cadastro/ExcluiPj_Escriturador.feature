Feature: Teste: Fazer operação exclui PJ ESCRITURADOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PJ ESCRITURADOR
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj escriturador
    And exclui o pj escriturador
    Then tenho exclui pj escriturador concluido
