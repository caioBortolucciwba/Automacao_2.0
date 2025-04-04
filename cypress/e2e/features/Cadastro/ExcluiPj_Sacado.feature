Feature: Teste: Fazer operação exclui PJ SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PJ SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj sacado
    And exclui o pj sacado
    Then tenho exclui pj sacado concluido
