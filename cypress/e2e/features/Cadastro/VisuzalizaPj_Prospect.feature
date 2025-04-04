Feature: Teste: Operação visualiza PJ PROSPECT

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PJ PROSPECT
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pj prospect
    And preencho todos os campos do visualiza pj prospect
    Then tenho cadastramento concluido
