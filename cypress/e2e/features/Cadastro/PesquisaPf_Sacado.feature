Feature: Teste: Operação pesquisa PF SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação pesquisa PF SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu pesquisa pf sacado
    And preencho todos os campos do pesquisa pf sacado
    Then tenho cadastramento concluido
