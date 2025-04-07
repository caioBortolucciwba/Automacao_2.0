Feature: Teste: Operação pesquisa PJ INSTITUIÇÃO FINANCEIRA

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação pesquisa PJ INSTITUIÇÃO FINANCEIRA
    Given que o usuário está na página inicial
    When o usuário clica no menu pesquisa pj instfinanceira
    And preencho todos os campos do pesquisa pj instfinanceira
    Then tenho cadastramento concluido
