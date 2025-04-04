Feature: Teste: Operação pesquisa PJ ASSINANTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação pesquisa PJ ASSINANTE
    Given que o usuário está na página inicial
    When o usuário clica no menu pesquisa pj assinante
    And preencho todos os campos do pesquisa pj assinante
    Then tenho cadastramento concluido
