Feature: Teste: Operação visualiza PJ FUNCIONARIO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PJ FUNCIONARIO
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pj funcionario
    And preencho todos os campos do visualiza pj funcionario
    Then tenho cadastramento concluido
