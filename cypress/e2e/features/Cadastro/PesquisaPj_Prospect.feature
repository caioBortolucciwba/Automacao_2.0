Feature: Operação pesquisa PJ prospect

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Pesquisa PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu pesquisa pj prospect
    And preencho todos os campos do pesquisa pj prospect
    Then tenho cadastramento concluido
