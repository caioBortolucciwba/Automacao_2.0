Feature: Teste: Operação pesquisa PJ SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação pesquisa PJ SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu pesquisa pj sacado
    And preencho todos os campos do pesquisa pj sacado
    Then tenho cadastramento concluido
