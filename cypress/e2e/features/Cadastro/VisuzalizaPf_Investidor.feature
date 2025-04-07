Feature: Teste: Operação visualiza PF INVESTIDOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PF INVESTIDOR
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pf investidor
    And preencho todos os campos do visualiza pf investidor
    Then tenho cadastramento concluido
